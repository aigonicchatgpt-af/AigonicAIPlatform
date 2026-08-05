import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ChatWidget from "../components/agent/ChatWidget";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NeuralCursor from "../components/common/NeuralCursor";
import ScrollEffects from "../components/common/ScrollEffects";

function MainLayout() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="ambient-scene" aria-hidden="true"><span className="ambient-grid"/><i className="ambient-node node-one"/><i className="ambient-node node-two"/><i className="ambient-node node-three"/></div>
      <ScrollEffects />
      <AnimatePresence mode="wait"><motion.main key={location.pathname} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .28 }}><Outlet /></motion.main></AnimatePresence>
      <Footer />
      <ChatWidget />
      <NeuralCursor />
    </>
  );
}

export default MainLayout;
