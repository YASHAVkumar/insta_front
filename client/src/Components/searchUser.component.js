import Axios from "axios";
import React, { useEffect, useState } from "react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const SearchUser = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        Axios.get(`${BACKEND_URL}/users`)
            .then(res => {
                (res.data).forEach((user) => {
                    setUserList(users => [...users, user.username])
                })
            })
    }, [])

    const FilterUser = (e) => {
        var filter, ul, li, div, txtValue;

        filter = e.target.value.toLowerCase();
         ul = document.querySelector("#users");
        li = ul.getElementsByTagName('p');

        for (let i = 0; i < li.length; i++) {
            let user = li[i];
            div = user.getElementsByTagName('div')[0];
            txtValue = div.textContent || div.innerText;
            if (txtValue.toLowerCase().indexOf(filter) === -1) user.style.display = "none";
            else user.style.display = "block";
        }
    }

    return (
        <div className="container" style={{textAlign:"center"}}>
            <div>
                <br/><br/><br/>
                <div className="form-group">
                   <div className="btn-group ">
                    <input type="text" className="btn bg-white btn-outline-primary form-control w-40" placeholder="Search for username..." id="searchUsername" onChange={FilterUser} />
                    <input type="submit" className="btn btn-outline-primary btn-success" value="Search"/>
                   </div>
                </div>
                <br/><br/><br/>
                <div id="users" className="container p-2 shadow-lg border d-flex flex-wrap">
                    {userList.map((user) => {
                        return <p key={user} className="p-2"><div className="btn btn-primary shadow-sm" onClick={() => window.location = `/u/${user}`}>{user}</div></p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchUser;