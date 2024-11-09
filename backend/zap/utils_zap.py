import requests
import time
from zapv2 import ZAPv2

zap = ZAPv2(apikey="")
def spider_scan(target):
    try:
        scanID = zap.spider.scan(target)
        while int(zap.spider.status(scanID)) < 100:
            time.sleep(1)
        Results = zap.spider.results(scanID)
        return Results
    except:
        return ""


def limit_pscan():
    headers = {"Accept": "application/json"}
    try:
        res = requests.get(
            "http://localhost:8080/JSON/pscan/action/disableAllScanners/",
            headers=headers,
        )
        """
	        Information Leakage 10044
	        Cross-Site Scripting (XSS) 10031
	        Content Security Policy (CSP) Violations 10055
	        Cross-Origin Resource Sharing (CORS) Issues 10098
	        Information Disclosure: Suspicious Comments 10027
	        Directory Listing 10033
	        Server Leaks Information via “X-Powered-By” HTTP Response Header Field(s) 10037
	    """
        res = requests.get(
            "http://localhost:8080/JSON/pscan/action/enableScanners/",
            params={"ids": "10044,10031,10055,10098,10027,10033,10037"},
            headers=headers,
        )
        return res.json()
    except Exception as e:
    	print(e)
    	return None

def limit_ascan():
    headers = {"Accept": "application/json"}
    try:
        res = requests.get(
            "http://localhost:8080/JSON/ascan/action/disableAllScanners/",
            headers=headers,
        )
        """
	        .env Information Leak 40034
	        .htaccess Information Leak 40032
	        Code Injection 90019
	        Cross Site Scripting (Reflected) 40012
	        SQL Injection 40018
	    """
        res = requests.get(
            "http://localhost:8080/JSON/ascan/action/enableScanners/",
            params={"ids": "40034,40032,90019,40012,40018"},
            headers=headers,
        )
        return res.json()
    except:
        return None