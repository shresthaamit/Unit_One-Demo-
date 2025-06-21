const handleLogout = () => {
    localStorage.removeItem("token")
    alert("Logout Succeed")
    window.location.href("/")
}
export default handleLogout