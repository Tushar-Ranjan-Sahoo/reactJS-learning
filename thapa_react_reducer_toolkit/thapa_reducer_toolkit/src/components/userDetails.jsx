
import React from "react";
import { DeleteAllUsers } from "./DeleteAllUsers";
import styled from "styled-components";


const UserDetails = () => {
    return(
        <Wrapper>
            <div className="content">
                <div className="admin-table">
                    <div className="admin-subtitle">List of user details </div>
                    <button className="btn add-btn">Add new users</button>
                </div>
                <ul>
                    {/* <li>hi</li>
                    <li>hi</li> */}
                </ul>
                <hr />
                <DeleteAllUsers />
            </div>
        </Wrapper>
    )
};
const Wrapper = styled.section`
     margin: 1rem 3.2rem;

     .content ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
     }
     h3{
        margin: 0;
     }

     .admin-table{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        margin:4rem 0 ;
     }

     .admin-subtitle{
        front-size: 3.2rem;
     }

     .delete-btn {
        background-color: transparent;
        border: none;
      }
      .delete-icons{
        font-size: 2.6rem;
        color:#f12711;
        filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
        cursor: pointer;
      }
      @media screen and (max-width: 998px) {
        .admin-subtitle{
            margin-bottom: 1.6rem;
        }
    }
`;


export default UserDetails;