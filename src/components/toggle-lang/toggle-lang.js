import React, { useContext } from "react";
import { langs, LangContext } from "../../contexts/lang";
import { Badge, Button } from "antd";

export default function ToggleLang(props) {
  const lang = useContext(LangContext);
  const title = lang === langs.ru ? "ru" : "en";
  const { toggleLang } = props;
  return (
    <Badge count={title}>
      <Button onClick={toggleLang} icon="global" size="large" type="primary" />
    </Badge>
  );
}
