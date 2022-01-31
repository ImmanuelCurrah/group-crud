import React from 'react';
import { userState } from React
import { updateUserURL, } from "../../services/apiConfig";
function UpdateForm() {
  const [updatedUser, setUpdatedUser] = useState("")

  const handleChange = (e) => {
    setUpdatedUser(e.target.value)
  }

  return <div>
    <form>
      <input
        className='updateUsername'
        placeholder='User Name'
        value={user}
        name='UserName'
        required
        onChange={handleChange}
      />
    </form>
  </div>;
}

export default UpdateForm;
