import  { useEffect, useState } from 'react';

const useForUserCart = () => {
    const [user,setUser]=useState({})
    const [sentOtpUser,setSentOtpUser]=useState({})
    const [cartBook,setCartBook]=useState([])
    const [cartMessage,setCartMessage]=useState("")
       
    
    
    // user
    const handlerToSetUser=(userData)=>{
        setUser(userData)
        localStorage.setItem('user',JSON.stringify(userData))
    }
    // user
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user);
            }
      }, []);


    //   Cart Book
    const handlerToSetCart=(book)=>{
       const exits=cartBook.find(cart=>cart.id==book.id)
       if (exits){
        setCartMessage("Book Already In Cart")
       }
       else{
        const cart=[...cartBook]
        book.quantity=1
        cart.push(book)
        console.log(cart)
        if (cart){
         localStorage.setItem('cart',JSON.stringify(cart))
         setCartBook(cart)
        }
       }
    }


      useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            setCartBook(cart);
            }
      }, []);

   

    return {
        user,
        setUser,
        handlerToSetUser,
        setSentOtpUser,
        sentOtpUser,
        handlerToSetCart,
        cartMessage,
        cartBook,

    }
};

export default useForUserCart;