<?php include 'layout/header.php'; ?>
<!-- Main content -->
<section class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card card-dark ">
                   
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="row">

                            <div class="col-md-6">
                                <figure class="highcharts-figure ">
                                    <div id="containeracesso"></div>
                                </figure>
                            </div>

                            <div class="col-md-6">
                                <figure class="highcharts-figure ">
                                    <div id="containerpergunta"></div>
                                </figure>
                            </div>

                            <div class="col-md-6">
                                <figure class="highcharts-figure ">
                                    <div id="containerprod"></div>
                                </figure>
                            </div>
                            <div class="col-md-6">
                                <figure class="highcharts-figure ">
                                    <div id="containerplataforma"></div>
                                </figure>
                            </div>

                        </div>
                    </div>
                </div>
            </div> 

            <?php
            include 'layout/footer.php';
            ?>