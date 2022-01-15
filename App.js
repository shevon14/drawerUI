import React from "react";
import { StatusBar } from "react-native";
import Router from './src/router/router';

export default function App() {
  StatusBar.setBarStyle('light-content', true);
  return(
    <Router />
  )
}