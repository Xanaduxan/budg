import { FC, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Form, useLoaderData } from 'react-router-dom';
import { IResponseTransactionLoader } from '../types/types';
import CategoryModal from './CategoryModal';

const TransactionForm: FC = () => {
  const { categories } = useLoaderData() as IResponseTransactionLoader;
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <>
      <div className="rounded-md bg-slate-800 p-4">
        <Form className="grid gap-2" method="post" action="/transactions">
          <label htmlFor="title" className="grid">
            <span>Title</span>
            <input
              className="input border-slate-700"
              type="text"
              placeholder="Title..."
              name="title"
            />
          </label>
          <label htmlFor="amount" className="grid">
            <span>Amount</span>
            <input
              className="input border-slate-700"
              type="number"
              placeholder="Amount..."
              name="amount"
            />
          </label>
          <label htmlFor="category" className="grid">
            <span>Category</span>

            {categories.length ? (
              <select
                name="category"
                className="input border-slate-700  bg-slate-700  text-white rounded-md "
                required
              >
                {categories.map((category) => (
                  <option
                    value={category.id}
                    className="input "
                    key={category.id}
                  >
                    {category.title}
                  </option>
                ))}
              </select>
            ) : (
              <h1 className="mt-1 text-red-300">
                To continue create category first
              </h1>
            )}
          </label>
          <button
            onClick={(event) => {
              event.preventDefault();
              setVisibleModal(true);
            }}
            className="mt-5 flex max-w-fit items-center gap-2 text-white/50 hover:text-white"
          >
            <FaPlus />
            <span>Create new Category</span>
          </button>
          <div className="flex gap-4 items-center">
            <label className="cursor-pointer flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value={'income'}
                defaultChecked
                className="form-radio text-blue-600"
              />
              <span>Income</span>
            </label>
            <label className="cursor-pointer flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value={'expense'}
                className="form-radio text-blue-600"
              />
              <span>Expense</span>
            </label>
          </div>
          <button className="btn btn-green max-w-fit" type="submit">
            Save
          </button>
        </Form>
      </div>
      {visibleModal && (
        <CategoryModal type="post" setVisibleModal={setVisibleModal} />
      )}
    </>
  );
};

export default TransactionForm;
