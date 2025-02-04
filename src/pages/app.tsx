import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {checkLogin} from "../api/methods/auth.methods.ts";
import {LOGIN_FLAG_KEY} from "../common/storage-key.constant.ts";
import {toast} from "sonner";
import { Toaster } from "@/common/components/ui/sonner"

function App () {
  
  const navigate = useNavigate();
  
  // 登录校验
  /*useEffect(() => {
    const loginFlag = sessionStorage.getItem(LOGIN_FLAG_KEY);
    if (location.pathname !== '/auth' && !loginFlag) {
      checkLogin().then(() => {
        sessionStorage.setItem(LOGIN_FLAG_KEY, 'true');
        toast.info('欢迎回来');
      }).catch(() => {
        toast.error('未登录，请先登录');
        navigate('/auth');
      });
    }
  }, [navigate]);*/

  return (<>
    <Outlet />
    <Toaster />
  </>);
}

export default App;