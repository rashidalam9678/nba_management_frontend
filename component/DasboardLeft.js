import styles from "../styles/dashboard.module.css"
import Link from "next/link"
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { useUserContext } from "../context/UserContext";
import { useRouter } from "next/router";

const DasboardLeft = () => {
  const router= useRouter()
  const { user, setUser } = useUserContext()
  let body = {
    token: user?.token.token
  }
  const UserLogout = () => {
    // e.preventDefault();
    const reqOptions = {
      method: "POST",
      body: JSON.stringify(body)
    }

    fetch("http://localhost:8081/studentlogout", reqOptions)
      .then((response) => response.json())
      .then((response)=>{
        if(response.err){
          console.log(response.err)
        }else{
          setUser(null)
          localStorage.removeItem("user")
          router.push("/")
        }
      })


  }
  return (
    <>
      <div className={styles.left}>
        <div>
          <div className={styles.component}>
            <DashboardIcon />
            <Link href="/student/dashboard">Dashboard</Link>
          </div>

          <div className={styles.component}>
            <LibraryBooksIcon />
            <Link href="/student/registered-courses">Regsitered Courses</Link>
          </div>
          <div className={styles.component}>
            <FeedbackIcon />
            <Link href="/student/feedbacks">Feedbacks</Link>
          </div>
          <div className={styles.component}>
            <SettingsIcon />
            <Link href="/student/account-setting">Account Setting</Link>
          </div>
        </div>
        <div className={styles.component_last} onClick={()=>UserLogout()}>
            <LogoutIcon />
            <p>Logout</p>
        </div>

      </div>
    </>
  )
}

export default DasboardLeft