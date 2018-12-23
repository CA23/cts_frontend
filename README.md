# cts_frontend

Frontend using HTML, CSS and Javascript that accesses the JSON data from the Django REST API using AJAX(XMLHttpRequest) to arrive at an optimal time span for collaboration and scheduling.

For instance, if member "Bob Smith" has set aside a time span of availability of 20:00 to 22:00 to collaborate or contribute towwards the project.

Similary, if members "Jane Smith", "Alice Smith" and "John Smith" and multiple other members have their own time spans of availability, the front end uses javascript to arrive at an optimal time span(say 1 hour) during which the maximum number of members working on the project are available.

This time span can then be utilised to schedule a periodic status meeting or to ensure maximum productivity and communication.

For the Django models and the REST API that serves as backend, please see:

github.com/CA23

Brief description for collaboration tool:

Intended to allow(along with the front end) multiple members working on a project/s to collaborate, schedule and keep track of distributed work and organise meetings if necessary.

Built Django models for member details and their availability.

A Django REST API sits on top of the member models and presents JSON data using serializers and views created from the Django models.

