    

    function init_courage(){
        if(typeof(start_content['courage_h1'])!='undefined' && start_content['courage_h1']!=''){
            $('#div_courage_top h2').html(start_content['courage_h1']); //加载自定义内容
        }else{
            $('#div_courage_top h2').html('这些话埋藏在我心里很久了'); //设置默认值
        }
        if(typeof(start_content['courage_h2'])!='undefined' && start_content['courage_h2']!=''){
            $('#div_courage_top span').html(start_content['courage_h2']); //加载自定义内容
        }else{
            $('#div_courage_top span').html('终于有勇气告诉你'); //设置默认值
        }
        if(typeof(start_content['courage_receiver'])!='undefined' && start_content['courage_receiver']!=''){
            $('#div_c_typed_inner h1').html(start_content['courage_receiver']); //加载自定义内容
        }else{
            $('#div_c_typed_inner h1').html('my love'); //设置默认值
        }
        
        // 初始化两个div的高度，设置自定义背景
        var start_bg_img=start_content['bg_img'];
        $("#div_c_typed_outter").height($(window).height()-120);
        $("#div_c_typed_inner").height($(window).height()-120);
        console.log('$(window).height()-120 ->'+($(window).height()-120));
        if(typeof(start_content['bg_style'])!='undefined' && start_content['bg_style']=='bg_custom'){
            if(typeof(start_bg_img)!='undefined' && start_bg_img!=''){
                $("#div_c_typed_outter").css({"background-image": 'url('+start_bg_img+')'}); 
            }
        }

        // 设置正文之前的照片
        if(typeof(start_content['img_bool'])!='undefined' && start_content['img_bool']=='img_true'){ //如果设置了照片就显示
            if(typeof(start_content['img_src'])!='undefined' && start_content['img_src']!=''){
                $("#div_c_typed_inner").css({"padding":"10% 10%"});
                $("#div_courage_img").fadeIn("slow"); //
                $("#div_courage_img img").attr('src',start_content['img_src']); //
            }
        } 
        if(typeof(start_content['img_bool'])=='undefined'){ //全新作品显示图片
            var random_img=random_img_as();
            $("#div_c_typed_inner").css({"padding":"10% 10%"});
            $("#div_courage_img").fadeIn("slow"); //
            $("#div_courage_img img").attr('src',random_img); //
        }
        courage_typed_text();
    }
        
    function courage_typed_text(){
        // 这是需要打字的内容 
        var array_text;
        if(typeof(start_content['courage_text'])!='undefined'){
            var str_courage_text=start_content['courage_text'].join();
            str_courage_text=str_courage_text.replace(/,/g, '');
            str_courage_text=str_courage_text.replace(/\n|\r|\s/g, '');
            // console.log(str_courage_text=='');
            if(str_courage_text!=''){
                array_text=start_content['courage_text'];
                array_text.unshift(' ');
                console.log(array_text);
            }else{
                array_text=[];
                random_text_array(array_text,3);
                array_text.unshift(' ');
                console.log(array_text);
            }
        }else{
            array_text=[];
            random_text_array(array_text,3);
            array_text.unshift(' ');
            console.log(array_text);
        }

        //以下是打字效果的js            
        var str_cursorChar; 
        if(typeof(start_content['cursor_char'])!='undefined' && start_content['cursor_char']!=''){
            switch(start_content['cursor_char']){ //设置打字光标的样式
                case 'cursor_heart':
                    str_cursorChar='❤';
                    break;
                case 'cursor_sub':
                    str_cursorChar='_';
                    break;
                case 'cursor_music':
                    str_cursorChar='♫';
                    break;
                case 'cursor_star':
                    str_cursorChar='★';
                    break;
                case 'cursor_sun':
                    str_cursorChar='☀';
                    break;
                default:
                    str_cursorChar='|';
            }
        }else{
            str_cursorChar='❤';
        }

        var courage_typed = new Typed('#span_c_typed', {
            strings: array_text, //输入内容, 支持html标签
            typeSpeed: 150, //打字速度
            backSpeed: 50, //回退速度
            backDelay: 1500,
            // fadeOut: false, //要不要淡出
            // fadeOutClass: 'typed-fade-out',
            // fadeOutDelay: 100,
            // loop: false, //要不要循环
            // loopCount: 'infinity',
            cursorChar: str_cursorChar,//替换光标的样式
            contentType: 'html', //值为html时，将打印的文本标签直接解析html标签
            onComplete: function(abc){
                        // console.log(abc);
                        console.log('finished typing words');
                        setTimeout(function(){ 
                            init_theme(); 
                            $('#div_courage').remove();
                        },2000); 
                    },
        });
    }

    function random_text_array(temp_array,length){  //获取随机的模板图片
        console.log('random_text_array');
        var random_array=[];
        while(random_array.length<length){
            // var random_num=Math.floor(Math.random()*(array_as_pics.length-0))+0;
            var random_num=Math.floor(Math.random()*(array_as_words_love.length)); //随机取值 
            if(random_array.indexOf(random_num)==-1){
                random_array.push(random_num);
            }
        }
        // console.log(random_array);
        for(var i=0; i<length; i++){  
            temp_array.push(array_as_words_love[random_array[i]]); //获取随机的模板图片
        }             
    } 

    function random_img_as(){  //获取随机的模板图片
        // console.log('random_img_as'); 
        var random_num=Math.floor(Math.random()*(array_as_pics_s.length)); //随机取值 
        var random_img=array_as_pics_s[random_num];
        return random_img;
    } 




    