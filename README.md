Web-Accessibility-Project-Rus
=============================

Websites should be accessible for everyone. For this purpose there are specific requirements (http://www.w3.org/TR/UNDERSTANDING-WCAG20/) for websites to be compatible with assistive tools (like screen readers, hands-free, etc.). In Russia, almost no websites follow them.
This web service will provide an easy way for website owners to check if their services are accessible. Users will be able to submit their html/css code on the website and get a list of requirements they do not follow in Russian language. The service will have a REST API to enable different design/language solutions.

Planned to implement in 2015:
- Other WCAG 2.0 guidelines that can be programmatically checked for
- A tool that would show the user specific places where their code is not compliant with the guidelines
- A plug-in version of the service that NGOs and other interested parties can build into their websites to promote accessibility

Basic Architechture:
The website will have a simple user interface that will allow source code submission. All requirments compliance checks will happen on the back end. Each requirment will have a corresponding rest API call. The list of reported websites will be stored in an SQL database.

Tools:
- SQL database
- Back-end: Node.js
- Front-end: Angular.js
