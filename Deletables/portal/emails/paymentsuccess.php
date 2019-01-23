<?php
session_start();

$username = $_SESSION['username'];
$paymentID = $_SESSION['payment_id'];
?>

<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600|Oswald" rel="stylesheet">
<!-- Section-12 -->
<table class="table_full editable-bg-color bg_color_e6e6e6 editable-bg-image" bgcolor="#e6e6e6" width="100%" align="center" mc:repeatable="castellab" mc:variant="Header" cellspacing="0" cellpadding="0" border="0">
    <!-- header -->
    <tr>
        <td>
            <!-- container -->
            <table class="table1 editable-bg-color bg_color_303f9f" bgcolor="#64B5F6" width="600" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                <!-- padding-top -->
                <tr>
                    <td height="25"></td>
                </tr>
                <tr>
                    <td>
                        <!-- Inner container -->
                        <table class="table1" width="520" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                            <tr>
                                <td>
                                    <!-- logo -->
                                    <table width="25%" align="left" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td align="left">
                                                <a href="#" class="editable-img">
                                                    <img editable="true" mc:edit="image001" src="https://s3.ap-south-1.amazonaws.com/inspiredmemories/white_HORIZONTAL.png" width="256" style="display:block; line-height:0; font-size:0; border:0;" border="0" alt="logo" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="22"></td>
                                        </tr>
                                    </table>
                                    <!-- END logo -->

                                    <!-- options -->
                                    <table width="50%" align="right" border="0" cellspacing="0" cellpadding="0">
                                        <!-- margin-top -->
                                        <tr>
                                            <td height="3"></td>
                                        </tr>
                                        <tr>

                                        </tr>
                                    </table>
                                    <!-- END options -->

                                </td>
                            </tr>

                            <!-- horizontal gap -->
                            <tr>
                                <td height="60"></td>
                            </tr>

                            <tr>
                                <td align="center">
                                    <div class="editable-img">
                                        <img editable="true" mc:edit="image003" src="https://s3.ap-south-1.amazonaws.com/inspiredmemories/exchange.png" width="128" style="display:block; line-height:0; font-size:0; border:0;" border="0" alt="" />
                                    </div>
                                </td>
                            </tr>

                            <!-- horizontal gap -->
                            <tr>
                                <td height="40"></td>
                            </tr>

                            <tr>
                                <td mc:edit="text001" align="center" class="text_color_ffffff" style="color: #ffffff; font-size: 30px; font-weight: 700; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                                    <div class="editable-text">
                                        <span class="text_container">
											<multiline style="font-family: 'Montserrat', sans-serif;">Payment Successfull</multiline>
										</span>
                                    </div>
                                </td>
                            </tr>

                            <!-- horizontal gap -->
                            <tr>
                                <td height="30"></td>
                            </tr>

                            <tr>
                                <td mc:edit="text002" align="center" class="text_color_ffffff" style="color: #ffffff; font-size: 12px; font-weight: 300; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                                    <div class="editable-text">
                                        <span class="text_container">
											<multiline style="font-family: 'Montserrat', sans-serif;">
												External Training and Internship <br>By InspiredMemories LLP
											</multiline>
										</span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <!-- END inner container -->
                    </td>
                </tr>
                <!-- padding-bottom -->
                <tr>
                    <td height="60"></td>
                </tr>
            </table>
            <!-- END container -->
        </td>
    </tr>

    <!-- body -->
    <tr>
        <td>
            <!-- container -->
            <table class="table1 editable-bg-color bg_color_ffffff" bgcolor="#ffffff" width="600" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                <!-- padding-top -->
                <tr>
                    <td height="60"></td>
                </tr>

                <tr>
                    <td>
                        <!-- inner container -->
                        <table class="table1" width="520" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                            <tr>
                                <td mc:edit="text003" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 14px; font-weight: 900; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                                    <div class="editable-text">
                                        <span class="text_container">
											<multiline style="font-family: 'Oswald', sans-serif;"><h2>Hi <?php echo $_SESSION['username']; ?>,</h2></multiline>
										</span>
                                    </div>
                                </td>
                            </tr>

                            <!-- horizontal gap -->
                            <tr>
                                <td height="15"></td>
                            </tr>

                            <tr>
                                <td mc:edit="text004" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 16px;line-height: 2; font-weight: 500; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                                    <div class="editable-text" style="line-height: 2;">
                                        <span class="text_container">
											<multiline style="font-family: 'Montserrat', sans-serif; text-align: justify;">
												Your Payment of Rs 1,000/- has been recorded and your confirmation ID is <?php echo $paymentID; ?>. We wish you all the best for your learning Journey. Please feel free to Innovate Yourself and get trained in better way. You have an opportunity to get certified about the technology of your choice at the end of ETI. 

													<br>You can work even harder and take up the exam after 2 Months to get certified which will be helpful for your future interviews. Within 48 hrs you will be getting your Login ID and the Instructions to start your Internship. Once again Congratulations for becoming an Intern at InspiredMemories. Welcome to the Team!
													
											</multiline>
										</span>
                                    </div>
                                </td>
                            </tr>

                            <!-- horizontal gap -->
                            <tr>
                                <td height="50"></td>
                            </tr>

                            <!-- table -->


                            <!-- horizontal gap -->
                            <tr>
                                <td height="60"></td>
                            </tr>

                            <tr>
                                <td mc:edit="text004" align="center" class="center_content text_color_282828" style="color: #282828; font-size: 14px;line-height: 2; font-weight: 500; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                                    <div class="editable-text" style="line-height: 2;">
                                        <span class="text_container">
											<multiline style="font-family: 'Montserrat', sans-serif; text-align: justify;"><small>When you get your login details, you can login using this link <a href="https://www.outlook.com" style="color: #303f9f;text-decoration: none;">Portal Login</a></small></multiline>
										</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td mc:edit="text004" align="center" class="center_content text_color_282828" style="color: #282828; font-size: 14px;line-height: 2; font-weight: 500; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                                    <div class="editable-text" style="line-height: 2;">
                                        <span class="text_container">
											<multiline style="font-family: 'Montserrat', sans-serif; text-align: justify;"><small>If you have trouble accessing your items, you can contact <a href="mailto:office@inspiredmemories.in" style="color: #303f9f;text-decoration: none;">support</a></small></multiline>
										</span>
                                    </div>
                                </td>
                            </tr>
                            <!-- horizontal gap -->
                            <tr>
                                <td height="40"></td>
                            </tr>

                        </table>
                        <!-- END inner container -->
                    </td>
                </tr>

                <!-- padding-bottom -->
                <tr>
                    <td height="30"></td>
                </tr>
            </table>
            <!-- END container -->
        </td>
    </tr>

    <!-- footer -->
    <tr>
        <td>
            <!-- container -->
            <table class="table1" width="600" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                <!-- padding-top -->
                <tr>
                    <td height="40"></td>
                </tr>

                <tr>
                    <td>
                        <!--  column-1 -->
                        <table class="table1-2" width="350" align="left" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td mc:edit="text010" align="left" class="center_content text_color_929292" style="color: #929292; font-size: 14px; line-height: 2; font-weight: 400; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                                    <div class="editable-text" style="line-height: 2;">
                                        <span class="text_container">
											<multiline>
												You are receving this email because you registered to our ETI list via :<a href="http://www.inspiredmemories.in" style="color: #303f9f;text-decoration: none;"> www.inspiredmemories.in</a>
											</multiline>
										</span>
                                    </div>
                                </td>
                            </tr>

                            <!-- horizontal gap -->
                            <tr>
                                <td height="20"></td>
                            </tr>





                            <!-- vertical gap -->
                            <table class="tablet_hide" width="130" align="left" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td height="1"></td>
                                </tr>
                            </table>


                    </td>
                </tr>

                <!-- padding-bottom -->
                <tr>
                    <td height="70"></td>
                </tr>
                </table>
                <!-- END container -->
        </td>
    </tr>
    </table>
    <!-- END wrapper -->