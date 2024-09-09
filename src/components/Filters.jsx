import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta } = useLoaderData();
  const categories = meta.categories;
  const companies = meta.companies;
  return (
    <>
      <details className="collapse bg-base-200 collapse-arrow">
        <summary className="collapse-title text-xl font-medium">
          Filters
        </summary>
        <div className="collapse-content">
          <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
            <FormInput
              type="search"
              label="search product"
              name="search"
              size="input-sm"
            />
            <FormSelect
              label="category"
              name="category"
              list={categories}
              size="select-sm"
            />
            <FormSelect
              label="company"
              name="company"
              list={companies}
              size="select-sm"
            />
            <FormSelect
              label="sort by"
              name="order"
              list={["A-Z", "Z-A", "Price: High-Low", "Price: Low-High"]}
              size="select-sm"
            />

            <FormRange label="price" name="price" size="range-sm" />
            <FormCheckbox
              label="shipping"
              name="shipping"
              defaultValue={false}
              size="checkbox-sm"
            />
            <button type="submit" className="btn btn-primary btn-sm">
              search
            </button>
            <Link to="/products" className="btn btn-accent btn-sm">
              reset
            </Link>
          </Form>
        </div>
      </details>
    </>
  );
};

export default Filters;
