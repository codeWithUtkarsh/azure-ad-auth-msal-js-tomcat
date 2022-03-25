<%
String clientId = System.getenv("MSAL_CLIENT_ID");
String authority = System.getenv("MSAL_AUTHORITY");
String redirectUri = System.getenv("MSAL_REDIRECT_URL");

out.println("{");
out.println("\"clientId\":\""+clientId+"\",");
out.println("\"authority\":\""+authority+"\",");
out.println("\"redirectUri\":\""+redirectUri+"\"");
out.println("}");

%>