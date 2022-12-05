import styles from "../../../styles/dashboard.module.css"
import DasboardLeft from "../../../component/DasboardLeft"
import { useUserContext } from "../../../context/UserContext"

 const Feedback = () => {
    const { user } = useUserContext()

    return (
      <div className={styles.feedback_container}>
        <DasboardLeft />
        <div className={styles.right}>
          <h1>Feedback list</h1>
          Welcome {user?.user.last_name}
        </div>
      </div>
    )
}
export default Feedback
