# Dealership App — Full‑Stack Capstone

## Overview
A full‑stack car dealership application built with **React**, **Django**, **Express/MongoDB**, and a **Sentiment Analyzer** microservice. The app is containerized with **Docker** and deployed on **Kubernetes** in the SN Labs environment.

## Tech Stack
- **Frontend:** React  
- **Backend:** Django + Gunicorn  
- **Database Service:** Express + MongoDB  
- **Microservice:** Sentiment Analyzer (IBM Code Engine)  
- **Deployment:** Docker, IBM Container Registry, Kubernetes  


## Key Endpoints
- **Register:** `/djangoapp/registration/`  
- **Login:** `/djangoapp/login/`  
- **Dealerships:** `/djangoapp/get_dealerships/`  
- **Reviews:** `/djangoapp/post_review/`  

## Notes
- Rebuild frontend + Docker image after any code changes.  
- Sentiment Analyzer URL must be updated if redeployed.  
