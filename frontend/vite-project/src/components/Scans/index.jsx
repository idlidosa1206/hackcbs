import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Fade, Slide, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const ExtensionWrapper = styled(Box)({
  width: "240px",
  height: "440px",
  backgroundColor: "#f9fafb",
  padding: "14px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  borderRadius: "16px",
});

const ContentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  flex: 1,
});

const CustomButton = styled(Button)(({ active }) => ({
  backgroundColor: active ? "#7c17cf" : "#fff",
  color: active ? "#fff" : "#374151",
  padding: "8px 4px",
  fontSize: "0.813rem",
  minWidth: 0,
  flex: 1,
  borderRadius: "12px !important",
  "&:hover": {
    backgroundColor: active ? "#6a14b2" : "#f3f4f6",
  },
  transition: "all 300ms",
  "&.MuiButton-root": {
    border: "none",
    marginLeft: "0 !important",
    marginRight: "0 !important",
  },
}));

const ScanButton = styled(Button)({
  backgroundColor: "#7c17cf",
  color: "#fff",
  width: "100%",
  marginTop: "14px",
  transition: "all 300ms",
  borderRadius: "12px",
  fontSize: "0.875rem",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: "#6a14b2",
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
  },
  "&:active": {
    transform: "translateY(2px)",
  },
});

const URLInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: "12px",
    fontSize: "0.875rem",
    "& fieldset": {
      borderColor: "#d1d5db",
    },
    "&:hover fieldset": {
      borderColor: "#7c17cf",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7c17cf",
    },
  },
  "& input": {
    padding: "10px 14px",
  },
});

export default function Scans({ isAuth }) {
  const navigate = useNavigate();

  const [selectedScans, setSelectedScans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [targetUrl, setTargetUrl] = useState("");
  const scanTypes = ["spider", "active", "passive"];

  useEffect(() => {
    const getCurrentTab = async () => {
      try {
        const [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        if (tab?.url) {
          setTargetUrl(tab.url);
        }
      } catch (error) {
        console.error("Error getting current tab:", error);
      }
    };
    getCurrentTab();
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuth) {
        try {
          const result = await chrome.storage.local.get(["token"]);
          if (!result.token) {
            chrome.runtime.sendMessage({ type: "OPEN_LOGIN" });
            window.close();
          }
        } catch (error) {
          console.error("Auth check failed:", error);
          window.close();
        }
      }
    };
    checkAuth();
  }, [isAuth]);

  const handleToggleScan = (type) => {
    setSelectedScans((prevSelected) =>
      prevSelected.includes(type)
        ? prevSelected.filter((scan) => scan !== type)
        : [...prevSelected, type]
    );
  };

  const handleScanSubmit = async () => {
    if (!targetUrl) {
      return;
    }

    setIsLoading(true);
    try {
      // const { token } = await chrome.storage.local.get(["token"]);

      // Make parallel requests for each selected scan type
      // const scanPromises = selectedScans.map(async (scanType) => {
      //   const response = await fetch(
      //     `http://localhost:4444/api/scan/${scanType.toLowerCase()}`,
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //         Authorization: `Bearer ${token}`,
      //       },
      //       body: JSON.stringify({
      //         target: targetUrl,
      //       }),
      //     }
      //   );

      //   if (!response.ok) {
      //     throw new Error(`Scan ${scanType} failed: ${response.statusText}`);
      //   }

      //   return response.json();
      // });

      // Wait for all scans to complete
      // const results = await Promise.all(scanPromises);

      // Notify background script
      // chrome.runtime.sendMessage({
      //   type: "SCANS_STARTED",
      //   data: {
      //     scanTypes: selectedScans,
      //     url: targetUrl,
      //     results,
      //   },
      // });

      // Instead of closing, redirect to checkout
      const delay = async(ms) => new Promise((resolve) => setTimeout(resolve, ms));
      await delay(3000)
      
      navigate("/checkout");
    } catch (error) {
      console.error("Scan failed:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fade in timeout={500}>
      <ExtensionWrapper>
        <ContentWrapper>
          <Slide direction="down" in timeout={500}>
            <Box textAlign="center" mb={0.5}>
              <Typography
                variant="h6"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: "#111827",
                  letterSpacing: "-0.025em",
                  fontSize: "1.125rem",
                }}
              >
                Choose Scans
              </Typography>
            </Box>
          </Slide>

          <URLInput
            fullWidth
            value={targetUrl}
            onChange={(e) => setTargetUrl(e.target.value)}
            placeholder="Target URL"
            size="small"
            disabled={isLoading}
          />

          <Slide direction="up" in timeout={500}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  width: "100%",
                }}
              >
                {scanTypes.map((type) => (
                  <CustomButton
                    key={type.toLowerCase()}
                    onClick={() => handleToggleScan(type)}
                    active={selectedScans.includes(type)}
                    aria-pressed={selectedScans.includes(type)}
                    disabled={isLoading}
                    fullWidth
                  >
                    {type}
                  </CustomButton>
                ))}
              </Box>

              <ScanButton
                variant="contained"
                disableElevation
                disabled={selectedScans.length === 0 || isLoading || !targetUrl}
                onClick={handleScanSubmit}
              >
                {isLoading ? "Starting Scans..." : "Scan Now"}
              </ScanButton>
            </Box>
          </Slide>
        </ContentWrapper>
      </ExtensionWrapper>
    </Fade>
  );
}
