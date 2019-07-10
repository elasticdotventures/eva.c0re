<template>

  <!--
    https://getbootstrap.com/docs/4.0/components/navbar/
  -->
  <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header page-scroll">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
          <i class="fa fa-bars"></i>
        </button>
        <a class="navbar-brand" href="index.html">
          <h1>B2BCBD.us</h1>
        </a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#intro">Home</a></li>
          <li><a href="#about">Our Team</a></li>
          <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Services <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#service-formulation">Product Formulation</a></li>
                <li><a href="#service-cbd">CBD Isolate &amp; Distillate</a></li>
                <li><a href="#service-distribution">Worldwide Distribution</a></li>
                <li><a href="#service-sourcing">Supplier Sourcing</a></li>
              </ul>
            </li>  
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
  </nav>

</template>