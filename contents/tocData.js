// ConvertInfo : FairlyLinguist 1.17.0.0
{
  var objTOC = new TocObject();
  objTOC.setTitle("NDI Manual");
  objTOC.setWindowTitle("NDI Manual");
  objTOC.disablePrintPage();
  objTOC.setSelectPackageEnabled(false);
  objTOC.setInsertTitlePage(true);
  objTOC.disableDisplayNumber();
  objTOC.disableViewFileIcon();
  objTOC.setBaselevel(0);
  objTOC.setSearchEnabled(true);
  objTOC.setLogoFile("template/img/logo.png");

// 1 Introduction
  objTOC.addHeader("ID_204982373", 0, "1 Introduction", "Pages/Page_204982373.html", "", false, "001");

// 2 NDI Installation and Configuration
  objTOC.addHeader("ID_204982375", 0, "2 NDI Installation and Configuration", "Pages/Page_204982375.html", "", false, "003");

// 3 NDI Welcome Screen
  objTOC.addHeader("ID_204982390", 0, "3 NDI Welcome Screen", "Pages/Page_204982390.html", "", false, "006");

// 3.1 Development Environments Tool
  objTOC.addItem("ID_204982390", 1, "3.1 Development Environments Tool", "Pages/Page_204982394.html", "", false, "006_001");

// 3.1.1 Environment Destination
  objTOC.addItem("ID_204982390", 2, "3.1.1 Environment Destination", "Pages/Page_204982399.html", "", false, "006_001_001");

// 3.1.2 Create From Archive
  objTOC.addItem("ID_204982390", 2, "3.1.2 Create From Archive", "Pages/Page_204982436.html", "", false, "006_001_002");

// 3.1.3 Dev Environments Screen
  objTOC.addItem("ID_204982390", 2, "3.1.3 Dev Environments Screen", "Pages/Page_204982440.html", "", false, "006_001_003");

// 3.1.4 Custom Package Selection
  objTOC.addItem("ID_204982390", 2, "3.1.4 Custom Package Selection", "Pages/Page_204982462.html", "", false, "006_001_004");

// 3.2 Hardware Tool
  objTOC.addItem("ID_204982390", 1, "3.2 Hardware Tool", "Pages/Page_204982481.html", "", false, "006_002");

// 4 Troubleshooting
  objTOC.addHeader("ID_204982497", 0, "4 Troubleshooting", "Pages/Page_204982497.html", "", false, "007");

// 5 Glossary
  objTOC.addHeader("ID_204982498", 0, "5 Glossary", "Pages/Page_204982498.html", "", false, "008");


  objTOC.addHeader("HISTORY", 0, "Revision History", "history.html", "", false, "991");

  Reassemble.objectTocData = objTOC;
}
