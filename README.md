# Customer Satisfaction Prediction (Olist)

Predicts whether an e-commerce order's customer will be satisfied (happy) or unhappy, using a Random Forest model served by a Flask API and an Angular form, with GitHub Actions CI/CD.

## Task and model
- Binary classification: happy (1) vs unhappy (0) from 15 order inputs.
- Dataset: Olist Brazilian e-commerce data (not included in this repo because of its size).
- Model: Random Forest, trained with an 80/20 stratified split in the notebook in `notebooks/`.
- Model file: `backend/models/model_bundle.joblib`, created from my own training notebook.
  

## Input features
price, freight_value, product_weight_g, product_length_cm, product_height_cm, product_width_cm, payment_installments, payment_value, delivery_days, estimated_days, purchase_month, order_status, payment_type, customer_state, product_category_name.

## Versions
Python 3.12.6, Node 24.13.1, npm 11.8.0, Git 2.53.0. See `docs/environment.txt`.

## Run locally
Terminal 1 (project root):

```powershell
.\.venv\Scripts\Activate.ps1
python backend\app.py
```

Terminal 2:

```powershell
cd frontend
ng serve --open --proxy-config proxy.conf.json
```

Open http://localhost:4200.

## Tests
```powershell
python -m pytest -q backend\tests\test_api.py
```
CI runs only `test_structure.py`, because the API tests need the local model and Flask setup.

## Links
- Repository: https://github.com/aimaimran41330-dev/ml-project
- Static demo: https://aimaimran41330-dev.github.io/ml-project/

## Limitations
GitHub Pages hosts only the static Angular page. Flask and the model run locally, so public visitors cannot get predictions. A separate hosted backend would be needed for that.

## Disclaimer
Research and teaching prototype only. Not for real business decisions.