import {compose} from "redux";
import ComponentLoader from "./componentLoader";
import {EZG_DATA, EZG_PROFILE, EZG_SITE} from "../_custom_hooks/enums";
import Header from "../_header/header";
import Profile from "../_profile/profile";
import Home from "../_home/home";
import Detail from "../_detail/detail";

export const HeaderLoader = compose(
    ComponentLoader({flag: EZG_SITE}),
)(Header);

export const ProfileLoader = compose(
    ComponentLoader({flag: EZG_PROFILE}),
)(Profile);

export const HomeLoader = compose(
    ComponentLoader({flag: EZG_DATA}),
)(Home);

export const DetailLoader = compose(
    ComponentLoader({flag: EZG_DATA}),
)(Detail);