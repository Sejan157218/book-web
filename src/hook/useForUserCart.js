import  { useEffect, useState } from 'react';

const useForUserCart = () => {
    const [user,setUser]=useState({})
    const [sentOtpUser,setSentOtpUser]=useState({})
    const [cartBook,setCartBook]=useState([])
    const [cartMessage,setCartMessage]=useState("")
    const totalQuantity=cartBook.reduce((sumofquantity, current) => sumofquantity + current.quantity, 0);  
    const totalPrice=cartBook.reduce((sumofprice, current) => sumofprice + current.selling_Price *  current.quantity, 0); 

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
        book.total=book.quantity * book.selling_Price
        cart.push(book)
        console.log(cart)
        if (cart){
         localStorage.setItem('cart',JSON.stringify(cart))
         setCartBook(cart)
         setCartMessage("Successfully add to cart")
        }
       }
    }

    const handleToIncrease=(id)=>{
    const exits=cartBook.find(cart=>cart.id==id)
    const rest=cartBook.filter(cart=>cart.id!=id)
    const newCart=[...rest]
    if (exits){
        exits.quantity +=1
        exits.total=exits.quantity * exits.selling_Price
        newCart.push(exits)
        localStorage.setItem('cart',JSON.stringify(newCart))
        setCartBook(newCart)
    }
    }
    const handleToDecrease=(id)=>{
      
    const exits=cartBook.find(cart=>cart.id==id)
    const rest=cartBook.filter(cart=>cart.id!=id)
    const newCart=[...rest]
    console.log(exits.quantity)
    if (exits && exits.quantity>1){
        console.log(id)
        exits.quantity -=1
        exits.total=exits.quantity * exits.selling_Price
        newCart.push(exits)
        localStorage.setItem('cart',JSON.stringify(newCart))
        setCartBook(newCart)
    }
    }



    const handlerToDelete=(id)=>{
    const rest=cartBook.filter(cart=>cart.id!=id)
    localStorage.setItem('cart',JSON.stringify(rest))
    setCartBook(rest)
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
        handleToIncrease,
        handleToDecrease,
        handlerToDelete,
        totalQuantity,
        totalPrice,

    }
};

export default useForUserCart;