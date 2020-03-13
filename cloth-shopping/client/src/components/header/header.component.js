import React from "react";
import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";
// import "./header.styles.scss";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import {HeaderContainer,LogoContainer,OptionLink,OptionsContainer,OptionDiv} from './header.styles'
import { signOutStart } from "../../redux/user/user.action";
const Header = ({ currentUser, hidden,signOutStart }) => (
  <HeaderContainer>
    <LogoContainer  to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink  to="/shop">
        SHOP
      </OptionLink>
      <OptionLink  to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv  onClick={signOutStart}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink  to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch =>({
  signOutStart : () => dispatch (signOutStart())
});
export default connect(mapStateToProps,mapDispatchToProps)(Header);
