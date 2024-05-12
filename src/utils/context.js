import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [isCartModalOpen , setIsCartModalOpen ] = useState(false);
    const [signInModalOpen , setSignInModalOpen ] = useState(false);
    const [paymentModalOpen , setPaymentModalOpen ] = useState(false);
    const [videoModalOpen , setVideoModalOpen ] = useState(false);
    const [discountModalOpen, setDiscountModalOpen ] = useState(false);     

    const addToCart = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)
        if (existingItem) {
            existingItem.count += 1
            setCartItems([...cartItems])
            console.log(existingItem.count);
          } else {
            setCartItems([...cartItems, {...item, count: 1}])
          }
    }

    const increaseCount = (itemId) => {
        const updatedCart = cartItems.map((item) => {
          if(item.id === itemId) {
            return {...item, count: item.count + 1}
          } 
          return item
        })
        setCartItems(updatedCart)
      }

      const reduseCount = (itemId) => {
        const updatedCart = cartItems.map((item) => {
          if(item.id === itemId) {
            const newCount = item.count -1 >= 1 ? item.count - 1 : 1;
            return {...item, count: newCount}
          } 
          return item
        })
        setCartItems(updatedCart)
      }

      const totalCount = () => {
        const total_count = cartItems.reduce((acc, item) => acc + item.count, 0)
        return total_count
      }

      const totalPrice = () => { 
        const total_price = cartItems
        .map((item) => item.price * item.count)
        .reduce((acc, value) => acc + value, 0)
        return total_price
      }

      const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId)
        setCartItems(updatedCart)
      }

    const openCartModal  = () => {
        setIsCartModalOpen(true);
        setSignInModalOpen(false);
        setPaymentModalOpen(false);
        setVideoModalOpen(false);
        console.log("click");
    };

    const closeCartModal = () => {
        setIsCartModalOpen(false);
    }

    const openSingInModal  = () => {
      setSignInModalOpen(true);
      setIsCartModalOpen(false);
      setPaymentModalOpen(false);
      setVideoModalOpen(false);
        console.log("click");
    };

    const closeSignInModal = () => {
        setSignInModalOpen(false);
    }

    const openPaymentModal  = () => {
      setPaymentModalOpen(true);
      setIsCartModalOpen(false);
      setSignInModalOpen(false);
      setVideoModalOpen(false);
        console.log("click");
    };

    const closePaymentModal = () => {
      setPaymentModalOpen(false);
    }
    const openVideoModal  = () => {
      setVideoModalOpen(true);
      setIsCartModalOpen(false);
      setSignInModalOpen(false);
      setPaymentModalOpen(false);
        console.log("click");
    };

    const closeVideoModal = () => {
      setVideoModalOpen(false);
    }

    const openDiscountModal = () => {
      setDiscountModalOpen(true)
    }

    const closeDiscountModal = () => {
      setDiscountModalOpen(false)
    }

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeCartModal()
        closeSignInModal();
        closePaymentModal()
        closeVideoModal()
        closeDiscountModal()
      }
    };

    useEffect(() => {
      window.addEventListener("keydown", handleEscapeKey);
      return () => {
        window.removeEventListener("keydown", handleEscapeKey);
      };
    }, []);



    


    return (<CartContext.Provider value={{cartItems, isCartModalOpen, signInModalOpen, paymentModalOpen, videoModalOpen, discountModalOpen, addToCart, openCartModal, closeCartModal, increaseCount, reduseCount, totalCount, totalPrice, removeFromCart, openSingInModal, closeSignInModal, openPaymentModal, closePaymentModal, openVideoModal, closeVideoModal, openDiscountModal, closeDiscountModal }}>{children}</CartContext.Provider>)
}