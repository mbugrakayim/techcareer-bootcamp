import { Button, Grid } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { object, string } from "yup";

const addProduct = object().shape({
  name: string().required("Boş geçilemez"),
  unitPrice: string().required("Boş geçilemez"),
  unitsInStock: string().required("Boş geçilemez"),
  quantityPerUnit: string().required("Boş geçilemez"),
});

function AddProductComponent() {
  const saveProduct = (product) => {
    axios
      .post("https://northwind.vercel.app/api/products", product)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      unitPrice: "",
      unitsInStock: "",
      quantityPerUnit: "",
    },
    validationSchema: addProduct,
    onSubmit: (values) => {
      saveProduct(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h3 style={{ textAlign: "center" }}>Add Product</h3>
        <Grid container>
          <Grid item xs={12} md={6}>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name ? (
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            ) : (
              <></>
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            <label>unitPrice:</label>
            <input
              type="text"
              placeholder="unitPrice"
              name="unitPrice"
              value={formik.values.unitPrice}
              onChange={formik.handleChange}
            />
            {formik.errors.unitPrice && (
              <span style={{ color: "red" }}>{formik.errors.unitPrice}</span>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <label>Stock:</label>
            <input
              type="text"
              placeholder="Stock"
              name="unitsInStock"
              value={formik.values.unitsInStock}
              onChange={formik.handleChange}
            />
            {formik.errors.unitsInStock && (
              <span style={{ color: "red" }}>{formik.errors.unitsInStock}</span>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <label>quantityPerUnit:</label>
            <input
              type="text"
              placeholder="quantityPerUnit"
              name="quantityPerUnit"
              value={formik.values.quantityPerUnit}
              onChange={formik.handleChange}
            />
            {formik.errors.quantityPerUnit && (
              <span style={{ color: "red" }}>
                {formik.errors.quantityPerUnit}
              </span>
            )}
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
    </>
  );
}

export default AddProductComponent;
