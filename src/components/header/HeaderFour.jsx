import React,{ useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";

const HeaderFour = () => {

  useEffect(()=>{
    //SubMenu Dropdown Toggle
      if ($('.menu-area li.menu-item-has-children ul').length) {
        $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

      }

      //Mobile Nav Hide Show
      if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.menu-area .push-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
          $(this).toggleClass('open');
          $(this).prev('ul').slideToggle(500);
        });


        $('.menu-backdrop, .mobile-menu .close-btn').click (()=>{
          $('body').removeClass('mobile-menu-visible');
        })


        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
          $('body').addClass('mobile-menu-visible');
        });
      }

  },[]);
  useEffect(()=>{
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
        $('.scroll-to-target').removeClass('open');
    
      } else {
        $("#sticky-header").addClass("sticky-menu");
        $('.scroll-to-target').addClass('open');
      }
    });
    
  },[])
  
  return (
    <header className="header-style-four">
    <div id="sticky-header" className="header-four-wrap main-header menu-area">
      <div className="container custom-container-two">
        <div className="row">
          <div className="col-12">
          <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
            <div className="main-menu menu-style-two">
              <nav>
                <div className="logo">
                  <a href="/index-4"><h1>Battlelands</h1></a>
                </div>
                <div id="mobile-menu" className="navbar-wrap push-menu d-none d-lg-flex">
                <ul className="navigation">
                        <li className=" menu-item-has-children"><NavLink  to="/">Home</NavLink>
                        </li>
                        <li ><NavLink to="/overview">Overview</NavLink></li>
                        <li ><NavLink to="/community">Community</NavLink></li>
                        <li ><NavLink to="/shop">Store</NavLink></li>
                        <li><NavLink to="/contact">contact</NavLink></li>
                      </ul>
                </div>
                <div className="header-action">
                  <ul>
                    <li className="header-shop-cart"><a href="/#"><i className="fas fa-shopping-basket" /><span>0</span></a>
                      <ul className="minicart">
                        <li className="d-flex align-items-start">
                          <div className="cart-img">
                            <a href="/#">
                              <img src="assets/img/product/cart_p01.jpg" alt="" />
                            </a>
                          </div>
                          <div className="cart-content">
                            <h4>
                              <a href="/#">Xbox One Controller</a>
                            </h4>
                            <div className="cart-price">
                              <span className="new">$229.9</span>
                              <span>
                                <del>$229.9</del>
                              </span>
                            </div>
                          </div>
                          <div className="del-icon">
                            <a href="/#">
                              <i className="far fa-trash-alt" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="total-price">
                            <span className="f-left">Total:</span>
                            <span className="f-right">$239.9</span>
                          </div>
                        </li>
                        <li>
                          <div className="checkout-link">
                            <a href="/cart">Shopping Cart</a>
                            <a className="red-color" href="/checkout">Checkout</a>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="header-search"><a href="/#" data-toggle="modal" data-target="#search-modal"><i className="fas fa-search" /></a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn"><i className="fas fa-times" /></div>
                    <div className="nav-logo"><Link to="/"><img src="assets/img/logo/logo.png" alt="" title='true' /></Link>
                    </div>
                    <div className="menu-outer">
                  
                    </div>
                    <div className="social-links">
                      <ul className="clearfix">
                        <li><a href="/#"><span className="fab fa-twitter" /></a></li>
                        <li><a href="/#"><span className="fab fa-facebook-square" /></a></li>
                        <li><a href="/#"><span className="fab fa-pinterest-p" /></a></li>
                        <li><a href="/#"><span className="fab fa-instagram" /></a></li>
                        <li><a href="/#"><span className="fab fa-youtube" /></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
          </div>
          {/* Modal Search */}
          <div className="modal fade" id="search-modal" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <form>
                  <input type="text" placeholder="Search here..." />
                  <button><i className="fa fa-search" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default HeaderFour