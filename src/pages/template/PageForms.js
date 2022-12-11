import { StyledForm, StyledSection } from "../../styles";

function PageForms() {
  return (
    <>
      <h1 className="text-3xl mb-2">Modelos de forms</h1>
      <StyledSection>
        <StyledForm action="#" method="POST">
          <label
            htmlFor="company-website"
            className="block text-sm font-medium text-gray-700"
          >
            Model - Input (Type:url)
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="url">http://</span>
            <input
              type="url"
              name="company-website"
              id="company-website"
              placeholder="www.example.com"
            />
          </div>

          <div>
            <label htmlFor="about">Model - Textarea</label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows={3}
                className=""
                placeholder="you@example.com"
                defaultValue={""}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Brief description for your profile. URLs are hyperlinked.
            </p>
          </div>

          <label className="block text-sm font-medium text-gray-700">
            Photo
          </label>
          <div className="mt-1 flex items-center">
            <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
              <svg
                className="h-full w-full text-gray-300 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <button type="button" className="ml-2">
              Change
            </button>
          </div>

          <label className="block text-sm font-medium text-gray-700">
            Model - Input (Type:file)
          </label>
          <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="">
                <label htmlFor="file-upload" className="">
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="">or drag and drop</p>
              </div>
              <p className="">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Model - Input (Type:Text)
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="email-address" className="">
              Model - Input (Type:Email)
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              className=""
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="country" className="">
              Model - Select
            </label>
            <select id="country" name="country" autoComplete="country-name">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <fieldset>
            <legend className="sr-only">By Email</legend>
            <div className="text-base font-medium text-gray-900">By Email</div>
            <div className="mt-4">
              <div className="flex items-start">
                <div>
                  <input id="comments" name="comments" type="checkbox" />
                </div>

                <label htmlFor="comments" className="inner">
                  Comments
                </label>
              </div>
              <div className="flex items-start">
                <div>
                  <input id="candidates" name="candidates" type="checkbox" />
                </div>

                <label htmlFor="candidates" className="inner">
                  Candidates
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Push Notifications</legend>
            <p>These are delivered via SMS to your mobile phone.</p>
            <div className="mt-4">
              <div className="flex items-center">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                />
                <label htmlFor="push-everything" className="inner">
                  Everything
                </label>
              </div>
              <div className="flex items-center">
                <input id="push-email" name="push-notifications" type="radio" />
                <label htmlFor="push-email" className="inner">
                  Same as email
                </label>
              </div>
            </div>
          </fieldset>

          <div className="area-button">
            <button type="submit" className="">
              Save
            </button>
          </div>
        </StyledForm>
      </StyledSection>
    </>
  );
}

export default PageForms;
