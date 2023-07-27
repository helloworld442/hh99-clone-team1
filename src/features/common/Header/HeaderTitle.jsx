import { useDispatch, useSelector } from "react-redux";
import { HeaderTitleText } from "./style";
import { useMutation } from "react-query";
import { getAuthToken } from "../../../api/user";
import { AUTH_USER } from "../../../redux/reducers/userSlice";
import { useEffect } from "react";

const NewsHeaderTitle = () => {
  const dispatch = useDispatch();
  const res = useMutation(getAuthToken, {
    onSuccess: (data) => {
      dispatch(AUTH_USER(data));
    },
  });

  useEffect(() => {
    res.mutate();
  }, []);

  if (res.isSuccess && res.data) return;
  return (
    <HeaderTitleText>우리가 시간이 없지,세상이 안 궁금하냐!</HeaderTitleText>
  );
};

export default NewsHeaderTitle;
