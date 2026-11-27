
import React, { useState } from "react";

function Registration() {
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    number: ""
  });

  const [members, setMembers] = useState([]);
  const [editId, setEditId] = useState(null);

  function handlechange(e) {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }

  function handlesubmit(e) {
    e.preventDefault();

    if (editId !== null) {
      // Update existing member
      setMembers(
        members.map((member) =>
          member.id === editId
            ? { ...member, ...formdata }
            : member
        )
      );

      alert("Member Updated Successfully!");
      setEditId(null);
    } else {
      // Add new member
      const newMember = {
        id: Date.now(),
        ...formdata
      };

      setMembers([...members, newMember]);

      alert("Registered Successfully!");
    }

    setformdata({
      username: "",
      email: "",
      number: ""
    });
  }

  function handleEdit(member) {
    setformdata({
      username: member.username,
      email: member.email,
      number: member.number
    });

    setEditId(member.id);
  }

  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this member?"
    );

    if (confirmDelete) {
      setMembers(members.filter((member) => member.id !== id));
      alert("Member Deleted Successfully!");
    }
  }

  function handleCancel() {
    setformdata({
      username: "",
      email: "",
      number: ""
    });

    setEditId(null);
  }

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">

      {/* Registration Form */}

      <div className="max-w-md mx-auto bg-[#182136] rounded-2xl p-8 shadow-xl">

        <h1 className="text-3xl text-white font-bold text-center mb-8">
          Registration Form
        </h1>

        <form onSubmit={handlesubmit} className="space-y-6">

          <div>
            <label className="block text-white mb-2 font-medium">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={formdata.username}
              onChange={handlechange}
              placeholder="Enter Username"
              required
              className="w-full bg-[#10182b] border border-slate-600 rounded-lg px-4 py-3 text-white outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handlechange}
              placeholder="Enter Email"
              required
              className="w-full bg-[#10182b] border border-slate-600 rounded-lg px-4 py-3 text-white outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              name="number"
              value={formdata.number}
              onChange={handlechange}
              placeholder="Enter Phone Number"
              pattern="[0-9]{10}"
              maxLength="10"
              required
              className="w-full bg-[#10182b] border border-slate-600 rounded-lg px-4 py-3 text-white outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg"
          >
            {editId !== null ? "Update Member" : "Register"}
          </button>

          {editId !== null && (
            <button
              type="button"
              onClick={handleCancel}
              className="w-full bg-slate-600 hover:bg-slate-700 text-white py-3 rounded-lg"
            >
              Cancel
            </button>
          )}

        </form>
      </div>

      {/* Registered Members Table */}

      <div className="max-w-5xl mx-auto mt-12">

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Registered Members
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border-collapse border border-gray-300">

            <thead>
              <tr className="bg-indigo-500 text-white">
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Username</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Phone Number</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {members.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center p-5 text-gray-500"
                  >
                    No registered members yet!
                  </td>
                </tr>
              ) : (
                members.map((member, index) => (
                  <tr key={member.id} className="text-center hover:bg-gray-100">

                    <td className="p-3 border text-gray-700">
                      {index + 1}
                    </td>

                    <td className="p-3 border text-gray-700">
                      {member.username}
                    </td>

                    <td className="p-3 border text-gray-700">
                      {member.email}
                    </td>

                    <td className="p-3 border text-gray-700">
                      {member.number}
                    </td>

                    <td className="p-3 border">
                      <div className="flex justify-center gap-2">

                        <button
                          onClick={() => handleEdit(member)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(member.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
}

export default Registration;
