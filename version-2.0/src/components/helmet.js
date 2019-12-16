import React from "react";
import Helmet from "react-helmet";

export default function HelmetHeader() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <title>Rohail Kabani | Software Engineer</title>
      <link rel="icon" href="src/images/logo.png" />
      <meta name="description" content="Detail-orientated student passionate about exploring the realm of software development." />
      <meta name="keywords" content="development, engineer, developer, software, software engineer, rohail, kabani, waterloo, javascript, ruby on rails, java, backend, graphql, api, go, github" />
      <meta name="author" content="Rohail Kabani" />
      <meta property="og:title" content="Rohail Kabani | Software Engineer" />
      <meta property="og:description" content="Detail-orientated student passionate about exploring the realm of software development." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://rohailkabani.com" />
      <meta property="og:site_name" content="Rohail Kabani"/>
      <meta property="og:image" content="http://rohailkabani.com/images/og.jpg" />
      <meta property="og:image:width" content="1080" />
      <meta property="og:image:height" content="720" />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:locale" content="en_US" />
      <meta itemprop="name" content="Rohail Kabani | Software Engineer" />
      <meta itemprop="description" content="Detail-orientated student passionate about exploring the realm of software development." />
      <meta itemprop="image" content="http://rohailkabani.com" />
    </Helmet>
  )
 };