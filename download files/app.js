function msg_i(title, sms) {
    $.alert({
        title: title,
        content: sms,
        type: 'blue',
    });
}
$(document).ready(function () {

    $.post('notification.php', {}, function (output) {

        var result = output;
        result = result.split('*');

        if (result.length >= 3) {
            for (var i = 0; i < result.length - 1; i = i + 3) {
                $.toast({
                    heading: result[i],
                    text: result[i + 1],
                    showHideTransition: 'slide',
                    icon: result[i + 2],
                    hideAfter: '20000'
                })

            }
        }
    });

});
//////////////////////////////////////////////////////

function admcheck() {
    if ($('#appno').val() == "") {
        alert("Provide Application/JAMB No. please");
        $('#admresult').css('display', 'none');
    }
    else {

        $.post('adm.php', { appp: appno.value, sesssion: appsession.value }, function (admresult) {

            var result = admresult.split('*');

            if (result.length > 1) {
                $('#parag').text(result);
                $('#admresult').slideDown(500);
                $('#admcheck').slideUp(500);
                $('#btnadmcheck').css('display', 'none');
                $('#btnback').css('display', 'block');

            }
            else {
                $('#parag').text("No admission offered yet");
                $('#admcheck').slideUp(500);
                $('#admresult').slideDown(500);
                $('#btnadmcheck').css('display', 'none');
                $('#btnback').css('display', 'block');

            }

        });
    }
}

//////////////////////////////////////////////////////////////////////////////
function admback() {

    $('#admresult').slideUp(500);
    $('#admcheck').slideDown(500);
    $('#btnadmcheck').css('display', 'block');
    $('#btnback').css('display', 'none');
    $('#parag').text("");

}

/////////////////////////////////////////////////////////////
function sendmsg() {
    $.confirm({
        title: 'Send Message',
        theme: 'supervan',
        content: '' +
            '<form action="post" class="formName">' +
            '<div class="form-group" align="left">' +
            '<label><strong>Name</strong></label>' +
            '<input type="text" class="name form-control" required />' +
            '<label><strong>Email</strong></label>' +
            '<input type="text" class="email form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />' +
            '<label><strong>Phone No.</strong></label>' +
            '<input type="text" class="phoneno form-control" pattern="[0]{1}[7-9]{1}[0-1]{1}[0-9]{8}" required />' +
            '<label><strong>Subject</strong></label>' +
            '<input type="text" class="subject form-control" required />' +
            '<label><strong>Message</strong></label>' +
            '<textarea class="msg form-control" autocomplete="on" spellcheck="true" required></textarea>' +

            '</div>' +
            '</form>',
        buttons: {
            formSubmit: {
                text: 'Send',
                btnClass: 'btn-blue',
                action: function () {
                    var myname = this.$content.find('.name').val();
                    var myemail = this.$content.find('.email').val();
                    var myphoneno = this.$content.find('.phoneno').val();
                    var mysubject = this.$content.find('.subject').val();
                    var mymsg = this.$content.find('.msg').val();
                    if (!myname) {
                        $.alert('Provide a valid Name');
                        return false;
                    }
                    else if (!myemail) {
                        $.alert('Provide a valid Email address');
                        return false;
                    }
                    else if (!myphoneno) {
                        $.alert('Provide a valid Phone No.');
                        return false;
                    }
                    else if (!mysubject) {
                        $.alert('Provide a valid Subject');
                        return false;
                    }
                    else if (!mymsg) {
                        $.alert('Enter some message');
                        return false;
                    }
                    else {
                        $.post('plugin/sendmsg.php', { myname: myname, myemail: myemail, myphoneno: myphoneno, mysubject: mysubject, mymsg: mymsg }, function (status) {
                            if (status == 1) {
                                $.alert('Message delivered successfully');
                                return false;
                            }
                            else if (status == 0) {
                                $.alert('Unable to deliver message. Try again');
                            }
                        });
                    }
                }
            },
            Cancel: function () {
                //close
            },
        },
        onContentReady: function () {
            // bind to events
            var jc = this;
            this.$content.find('form').on('submit', function (e) {
                // if the user submits the form by pressing enter in the field.
                e.preventDefault();
                jc.$$formSubmit.trigger('click'); // reference the button and click it
            });
        }
    });
}


/////////////////////////////////////////

///////////LOGIN FORM------------------------------
function loginstd() {
    $.post('plugin/checklogin.php', {}, function (status1) {
        if (status1 == 1) {
            location.href = 'register_student.php';
        }
        else {

            $('#mychoice').modal('toggle');
            $.confirm({
                title: 'Login Student',
                theme: 'supervan',
                content: '' +
                    '<div>' +
                    '<div align="center">' +
                    '<img class="image" src ="img/LOGO.png" width="100px"/>' +
                    '</div>' +
                    '<div class="form-group" align="left">' +
                    '<label><strong><i class="fa fa-user"></i> Email</strong></label>' +
                    '<input id="username" type="email" class="username form-control" required />' +
                    '<label><strong><i class="fa fa-lock"></i> Password</strong></label>' +
                    '<input id="password" type="password" class="password form-control" required />' +
                    '</div>' +
                    '</div>',
                buttons: {
                    formSubmit: {
                        text: 'Login',
                        btnClass: 'btn-blue',
                        action: function () {
                            var myusername = this.$content.find('.username').val();
                            var mypassword = this.$content.find('.password').val();
                            if (!myusername) {
                                $.alert('Provide a valid Username');
                                return false;
                            }
                            else if (!mypassword) {
                                $.alert('Provide a valid password');
                                return false;
                            }
                            else {
                                $.post('plugin/loginuser.php', { username: myusername, password: mypassword }, function (status) {
                                    if (status == 2) {
                                        // $.alert("Your payments not verified yet");
                                        msg_i("Payment Info", "Your payments not verified yet");
                                        $('#mychoice').modal('toggle');
                                    }
                                    else if (status == 1) {
                                        location.href = 'register_student.php';
                                    }
                                    else if (status == 0) {
                                        //  $.alert("Wrong Username/Password");
                                        msg_i("Invalid credentials", "Wrong Username/Password");
                                        $('#mychoice').modal('toggle');

                                    }

                                });
                            }
                        }
                    },
                    cancel: function () {
                        $('#mychoice').modal('toggle');
                        //close
                    },
                },
                onContentReady: function () {


                }
            });

        }

    });
}
///////////////////////////////////
function loginstd2() {
    $.post('plugin/checklogin2.php', {}, function (status1) {
        if (status1 == 1) {
            location.href = 'rreprint.php';
        }
        else {

            $('#mychoice').modal('toggle');
            $.confirm({
                title: 'Login Returning Student',
                theme: 'supervan',
                content: '' +
                    '<div>' +
                    '<div align="center">' +
                    '<img class="image" src ="img/LOGO.png" width="100px"/>' +
                    '</div>' +
                    '<div class="form-group" align="left">' +
                    '<label><strong><i class="fa fa-user"></i> Exam No/Email</strong></label>' +
                    '<input id="username" type="text" class="username form-control" required placeholder="Exam No. or Email" />' +
                    '<label><strong><i class="fa fa-lock"></i> Password</strong></label>' +
                    '<input id="password" type="password" class="password form-control" required />' +
                    '</div>' +
                    '</div>',
                buttons: {
                    formSubmit: {
                        text: 'Login',
                        btnClass: 'btn-red',
                        action: function () {
                            var myusername = this.$content.find('.username').val();
                            var mypassword = this.$content.find('.password').val();
                            if (!myusername) {
                                $.alert('Provide a valid Exam No. or Email');
                                return false;
                            }
                            else if (!mypassword) {
                                $.alert('Provide a valid password');
                                return false;
                            }
                            else {
                                var n = myusername.split('@');
                                n = n.length;
                                $.post('plugin/loginuser2.php', { username: myusername, password: mypassword, n: n }, function (status) {
                                    if (status == 2) {
                                        // $.alert("Your payments not verified yet");
                                        msg_i("Payment Info", "Your payments not verified yet");
                                        $('#mychoice').modal('toggle');
                                    }
                                    else if (status == 1) {
                                        location.href = 'rreprint.php';
                                    }
                                    else if (status == 0) {
                                        //$.alert("Wrong Username/Password");
                                        msg_i("Invalid credentials", "Wrong Username/Password");
                                        $('#mychoice').modal('toggle');

                                    }

                                });
                            }
                        }
                    },
                    cancel: function () {
                        $('#mychoice').modal('toggle');
                        //close
                    },
                },
                onContentReady: function () {


                }
            });

        }

    });
}

