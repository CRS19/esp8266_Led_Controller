#include <ESP8266WiFi.h>

const char *ssid =  "CRS";
const char *pass =  "1753821089";

WiFiClient client;

/* La conexion no muestra error, es importante el Serial.begin para poder visualizar el monitor del nodeMCU */

void setup() 
{
       Serial.begin(9600);
       delay(10);
               
       Serial.println("Connecting to ");
       Serial.println(ssid); 
 
       WiFi.begin(ssid, pass); 
       while (WiFi.status() != WL_CONNECTED) 
          {
            delay(500);
            Serial.print(".");
          }
      Serial.println("");
      Serial.println("WiFi connected"); 
}
 
void loop() 
{      
  
}
