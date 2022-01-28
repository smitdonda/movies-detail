import React,{useContext} from "react";
import {Link} from 'react-router-dom'
import {MoviesContext} from '../App'
function Sidebar() {
  let context = useContext(MoviesContext)
  console.log("Sidebar",context)
  return (
    <div class="sidebar">
      <ul class="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion">
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i> 
          </div>
          <div class="sidebar-brand-text mx-3">ALL MOVIES</div>
        </a>
        <div class="sidebar-heading">Movies Detail</div>
          <hr class="sidebar-divider my-0" />
        {/* All movies */}
        <li class="nav-item">
          <Link to='/all-movies'>
              <a  class="nav-link" href="#">
                <span>ALL MOVIES</span>
              </a>
          </Link>
        </li>
        {/* Add movies */}
        <li class="nav-item">
          <Link to='/add-movies'>
              <a className = 'nav-link' href="#">
                  <span>ADD MOVIES</span>   
              </a>
          </Link>
        </li>
        <hr class="sidebar-divider"/>
      </ul>
    </div>
  );
}
export default Sidebar;