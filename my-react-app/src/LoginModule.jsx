function Login(props){
        // if(props.isLoggedIn){
        //     return <h1>Welcome {props.user}</h1>
        // }else{
        //     return <h2>please login to continue !!</h2>
        // }
        let loginmsg=<h1>Welcome {props.user}</h1>
        let failuremsg=<h2>please login to continue !!</h2>
        return props.isLoggedIn?loginmsg:failuremsg
}
export default Login;