t=t*8000/44100,
a=((t/4*(4|t>>13&3)>>(~t>>11&1)&32)+(t/4*(t>>11&t>>13)*(~t>>9&3)&31)),
b=cos(12*cbrt(t%4096))*32+32,
c=(t*random()|t>>5)&31,
d=(t*random()|t>>5)&31,
[a+b+c+40,a+b+d+40]