import { UiSliceActions } from "../ui-slice";
import { cartSliceActions } from "../cart";

export function fetchCartData() {
    return async (dispatch) => {

        const fetchData = async () => {
            const response = await fetch('https://redux-advance-e4c9a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data;
        }


        try {
            const cartData = await fetchData();
            dispatch(cartSliceActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
            }))

        } catch (error) {
            dispatch(
                UiSliceActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Fetching Cart Data failed',
                })
            )
        }
    }
}

export function sendCartData(cart) {
    return async (dispatch) => {
        dispatch(
            UiSliceActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://redux-advance-e4c9a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                    })
                }
            );
            if (!response.ok) {
                throw new Error('Sending cart data failed');
            }

        };

        try {
            await sendRequest();
            dispatch(
                UiSliceActions.showNotification({
                    status: 'success',
                    title: 'Success',
                    message: 'Sending cart data success!'
                })
            )
        } catch (error) {
            dispatch(
                UiSliceActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Sending Cart Data failed',
                })
            )
        }

    }
}
