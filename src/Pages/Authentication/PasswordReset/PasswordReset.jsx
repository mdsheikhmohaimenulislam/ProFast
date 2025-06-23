// import React, { useState } from "react";
// import useAuth from "../../../Hooks/useAuth";

// const PasswordReset = () => {
//   const { handlePasswordReset } = useAuth();
//   const [email, setEmail] = useState("");
  

//   const handleReset = () => {
//     // if (!email) {
//     //   alert("Please enter your email address");
//     //   return;
//     // }
//     console.log(e);

//     // handlePasswordReset(email)
//     //   .then(() => {
//     //     alert("Password reset email sent!");
//     //   })
//     //   .catch((error) => {
//     //     console.log("Code:", error.code);
//     //     console.log("Message:", error.message);
//     //   });
//   };

//   return (
//     <div className="max-w-sm mx-auto p-4">
//       <input
//         type="email"
//         placeholder="Enter your email"
//         className="input input-bordered w-full mb-2"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleReset} className="btn btn-primary w-full">
//         Send Reset Link
//       </button>
//     </div>
//   );
// };

// export default PasswordReset;
