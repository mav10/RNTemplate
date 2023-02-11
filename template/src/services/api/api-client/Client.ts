//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.2.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import * as Types from '../api-client';
import type { AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

import { throwException, isAxiosError } from '../api-client';
import { getAxios, getBaseUrl } from './helpers';

/**
 * uploads an image
 * @param petId ID of pet to update
 * @param additionalMetadata (optional) Additional data to pass to server
 * @param file (optional) file to upload
 * @return successful operation
 */
export function uploadFile(petId: number, additionalMetadata?: string | null | undefined, file?: Types.FileParameter | null | undefined , cancelToken?: CancelToken | undefined): Promise<Types.ApiResponse> {
    let url_ = getBaseUrl() + "/pet/{petId}/uploadImage";

    if (petId === undefined || petId === null)
      throw new Error("The parameter 'petId' must be defined.");
    url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
      url_ = url_.replace(/[?&]$/, "");

    const content_ = new FormData();
    if (additionalMetadata !== null && additionalMetadata !== undefined)
        content_.append("additionalMetadata", additionalMetadata.toString());
    if (file !== null && file !== undefined)
        content_.append("file", file.data, file.fileName ? file.fileName : "file");

    let options_: AxiosRequestConfig = {
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            "Accept": "application/json"
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processUploadFile(_response);
    });
}

function processUploadFile(response: AxiosResponse): Promise<Types.ApiResponse> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        result200 = Types.ApiResponse.fromJS(resultData200);
        return Promise.resolve<Types.ApiResponse>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<Types.ApiResponse>(null as any);
}

/**
 * Add a new pet to the store
 * @param body Pet object that needs to be added to the store
 */
export function addPet(body: Types.Pet , cancelToken?: CancelToken | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/pet";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            "Content-Type": "application/json",
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processAddPet(_response);
    });
}

function processAddPet(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 405) {
        const _responseText = response.data;
        return throwException("Invalid input", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Update an existing pet
 * @param body Pet object that needs to be added to the store
 */
export function updatePet(body: Types.Pet , cancelToken?: CancelToken | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/pet";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
        data: content_,
        method: "PUT",
        url: url_,
        headers: {
            "Content-Type": "application/json",
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processUpdatePet(_response);
    });
}

function processUpdatePet(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 400) {
        const _responseText = response.data;
        return throwException("Invalid ID supplied", status, _responseText, _headers);

    } else if (status === 404) {
        const _responseText = response.data;
        return throwException("Pet not found", status, _responseText, _headers);

    } else if (status === 405) {
        const _responseText = response.data;
        return throwException("Validation exception", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Finds Pets by status
 * @param status Status values that need to be considered for filter
 * @return successful operation
 */
export function findPetsByStatus(status: Types.Status[] , cancelToken?: CancelToken | undefined): Promise<Types.Pet[]> {
    let url_ = getBaseUrl() + "/pet/findByStatus?";
      if (status === undefined || status === null)
        throw new Error("The parameter 'status' must be defined and cannot be null.");
      else
        status && status.forEach(item => { url_ += "status=" + encodeURIComponent("" + item) + "&"; });
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        method: "GET",
        url: url_,
        headers: {
            "Accept": "application/json"
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processFindPetsByStatus(_response);
    });
}

function processFindPetsByStatus(response: AxiosResponse): Promise<Types.Pet[]> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        if (Array.isArray(resultData200)) {
            result200 = [] as any;
            for (let item of resultData200)
                result200!.push(Types.Pet.fromJS(item));
        }
        else {
            result200 = <any>null;
        }
        return Promise.resolve<Types.Pet[]>(result200);

    } else if (status === 400) {
        const _responseText = response.data;
        return throwException("Invalid status value", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<Types.Pet[]>(null as any);
}

/**
 * Finds Pets by tags
 * @param tags Tags to filter by
 * @return successful operation
 * @deprecated
 */
export function findPetsByTags(tags: string[] , cancelToken?: CancelToken | undefined): Promise<Types.Pet[]> {
    let url_ = getBaseUrl() + "/pet/findByTags?";
      if (tags === undefined || tags === null)
        throw new Error("The parameter 'tags' must be defined and cannot be null.");
      else
        tags && tags.forEach(item => { url_ += "tags=" + encodeURIComponent("" + item) + "&"; });
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        method: "GET",
        url: url_,
        headers: {
            "Accept": "application/json"
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processFindPetsByTags(_response);
    });
}

function processFindPetsByTags(response: AxiosResponse): Promise<Types.Pet[]> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        if (Array.isArray(resultData200)) {
            result200 = [] as any;
            for (let item of resultData200)
                result200!.push(Types.Pet.fromJS(item));
        }
        else {
            result200 = <any>null;
        }
        return Promise.resolve<Types.Pet[]>(result200);

    } else if (status === 400) {
        const _responseText = response.data;
        return throwException("Invalid tag value", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<Types.Pet[]>(null as any);
}

/**
 * Find pet by ID
 * @param petId ID of pet to return
 * @return successful operation
 */
export function getPetById(petId: number , cancelToken?: CancelToken | undefined): Promise<Types.Pet> {
    let url_ = getBaseUrl() + "/pet/{petId}";

    if (petId === undefined || petId === null)
      throw new Error("The parameter 'petId' must be defined.");
    url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        method: "GET",
        url: url_,
        headers: {
            "Accept": "application/json"
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processGetPetById(_response);
    });
}

function processGetPetById(response: AxiosResponse): Promise<Types.Pet> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        result200 = Types.Pet.fromJS(resultData200);
        return Promise.resolve<Types.Pet>(result200);

    } else if (status === 400) {
        const _responseText = response.data;
        return throwException("Invalid ID supplied", status, _responseText, _headers);

    } else if (status === 404) {
        const _responseText = response.data;
        return throwException("Pet not found", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<Types.Pet>(null as any);
}

/**
 * Updates a pet in the store with form data
 * @param petId ID of pet that needs to be updated
 * @param name (optional) Updated name of the pet
 * @param status (optional) Updated status of the pet
 */
export function updatePetWithForm(petId: number, name?: string | null | undefined, status?: string | null | undefined , cancelToken?: CancelToken | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/pet/{petId}";

    if (petId === undefined || petId === null)
      throw new Error("The parameter 'petId' must be defined.");
    url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
      url_ = url_.replace(/[?&]$/, "");

    let content_ = "";
    if (name !== undefined)
        content_ += encodeURIComponent("name") + "=" + encodeURIComponent("" + name) + "&";
    if (status !== undefined)
        content_ += encodeURIComponent("status") + "=" + encodeURIComponent("" + status) + "&";
    content_ = content_.replace(/&$/, "");

    let options_: AxiosRequestConfig = {
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processUpdatePetWithForm(_response);
    });
}

function processUpdatePetWithForm(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 405) {
        const _responseText = response.data;
        return throwException("Invalid input", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Deletes a pet
 * @param petId Pet id to delete
 * @param api_key (optional) 
 */
export function deletePet(petId: number, api_key?: string | null | undefined , cancelToken?: CancelToken | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/pet/{petId}";

    if (petId === undefined || petId === null)
      throw new Error("The parameter 'petId' must be defined.");
    url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        method: "DELETE",
        url: url_,
        headers: {
            "api_key": api_key !== undefined && api_key !== null ? "" + api_key : "",
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processDeletePet(_response);
    });
}

function processDeletePet(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 400) {
        const _responseText = response.data;
        return throwException("Invalid ID supplied", status, _responseText, _headers);

    } else if (status === 404) {
        const _responseText = response.data;
        return throwException("Pet not found", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Place an order for a pet
 * @param body order placed for purchasing the pet
 * @return successful operation
 */
export function placeOrder(body: Types.Order , cancelToken?: CancelToken | undefined): Promise<Types.Order> {
    let url_ = getBaseUrl() + "/store/order";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processPlaceOrder(_response);
    });
}

function processPlaceOrder(response: AxiosResponse): Promise<Types.Order> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        result200 = Types.Order.fromJS(resultData200);
        return Promise.resolve<Types.Order>(result200);

    } else if (status === 400) {
        const _responseText = response.data;
        return throwException("Invalid Order", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<Types.Order>(null as any);
}

/**
 * Find purchase order by ID
 * @param orderId ID of pet that needs to be fetched
 * @return successful operation
 */
export function getOrderById(orderId: number , cancelToken?: CancelToken | undefined): Promise<Types.Order> {
    let url_ = getBaseUrl() + "/store/order/{orderId}";

    if (orderId === undefined || orderId === null)
      throw new Error("The parameter 'orderId' must be defined.");
    url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        method: "GET",
        url: url_,
        headers: {
            "Accept": "application/json"
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processGetOrderById(_response);
    });
}

function processGetOrderById(response: AxiosResponse): Promise<Types.Order> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        result200 = Types.Order.fromJS(resultData200);
        return Promise.resolve<Types.Order>(result200);

    } else if (status === 400) {
        const _responseText = response.data;
        return throwException("Invalid ID supplied", status, _responseText, _headers);

    } else if (status === 404) {
        const _responseText = response.data;
        return throwException("Order not found", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<Types.Order>(null as any);
}

/**
 * Delete purchase order by ID
 * @param orderId ID of the order that needs to be deleted
 */
export function deleteOrder(orderId: number , cancelToken?: CancelToken | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/store/order/{orderId}";

    if (orderId === undefined || orderId === null)
      throw new Error("The parameter 'orderId' must be defined.");
    url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        method: "DELETE",
        url: url_,
        headers: {
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processDeleteOrder(_response);
    });
}

function processDeleteOrder(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 400) {
        const _responseText = response.data;
        return throwException("Invalid ID supplied", status, _responseText, _headers);

    } else if (status === 404) {
        const _responseText = response.data;
        return throwException("Order not found", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Returns pet inventories by status
 * @return successful operation
 */
export function getInventory(  cancelToken?: CancelToken | undefined): Promise<{ [key: string]: number; }> {
    let url_ = getBaseUrl() + "/store/inventory";
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        method: "GET",
        url: url_,
        headers: {
            "Accept": "application/json"
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processGetInventory(_response);
    });
}

function processGetInventory(response: AxiosResponse): Promise<{ [key: string]: number; }> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        if (resultData200) {
            result200 = {} as any;
            for (let key in resultData200) {
                if (resultData200.hasOwnProperty(key))
                    (<any>result200)![key] = resultData200[key] !== undefined ? resultData200[key] : <any>null;
            }
        }
        else {
            result200 = <any>null;
        }
        return Promise.resolve<{ [key: string]: number; }>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<{ [key: string]: number; }>(null as any);
}

/**
 * Creates list of users with given input array
 * @param body List of user object
 * @return successful operation
 */
export function createUsersWithArrayInput(body: Types.User[] , cancelToken?: CancelToken | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/user/createWithArray";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            "Content-Type": "application/json",
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processCreateUsersWithArrayInput(_response);
    });
}

function processCreateUsersWithArrayInput(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    {
        const _responseText = response.data;
        return Promise.resolve<void>(null as any);

    }
}

/**
 * Creates list of users with given input array
 * @param body List of user object
 * @return successful operation
 */
export function createUsersWithListInput(body: Types.User[] , cancelToken?: CancelToken | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/user/createWithList";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            "Content-Type": "application/json",
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processCreateUsersWithListInput(_response);
    });
}

function processCreateUsersWithListInput(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    {
        const _responseText = response.data;
        return Promise.resolve<void>(null as any);

    }
}

/**
 * Get user by user name
 * @param username The name that needs to be fetched. Use user1 for testing.
 * @return successful operation
 */
export function getUserByName(username: string , cancelToken?: CancelToken | undefined): Promise<Types.User> {
    let url_ = getBaseUrl() + "/user/{username}";

    if (username === undefined || username === null)
      throw new Error("The parameter 'username' must be defined.");
    url_ = url_.replace("{username}", encodeURIComponent("" + username));
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        method: "GET",
        url: url_,
        headers: {
            "Accept": "application/json"
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processGetUserByName(_response);
    });
}

function processGetUserByName(response: AxiosResponse): Promise<Types.User> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        result200 = Types.User.fromJS(resultData200);
        return Promise.resolve<Types.User>(result200);

    } else if (status === 400) {
        const _responseText = response.data;
        return throwException("Invalid username supplied", status, _responseText, _headers);

    } else if (status === 404) {
        const _responseText = response.data;
        return throwException("User not found", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<Types.User>(null as any);
}

/**
 * Updated user
 * @param username name that need to be updated
 * @param body Updated user object
 */
export function updateUser(username: string, body: Types.User , cancelToken?: CancelToken | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/user/{username}";

    if (username === undefined || username === null)
      throw new Error("The parameter 'username' must be defined.");
    url_ = url_.replace("{username}", encodeURIComponent("" + username));
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
        data: content_,
        method: "PUT",
        url: url_,
        headers: {
            "Content-Type": "application/json",
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processUpdateUser(_response);
    });
}

function processUpdateUser(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 400) {
        const _responseText = response.data;
        return throwException("Invalid user supplied", status, _responseText, _headers);

    } else if (status === 404) {
        const _responseText = response.data;
        return throwException("User not found", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Delete user
 * @param username The name that needs to be deleted
 */
export function deleteUser(username: string , cancelToken?: CancelToken | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/user/{username}";

    if (username === undefined || username === null)
      throw new Error("The parameter 'username' must be defined.");
    url_ = url_.replace("{username}", encodeURIComponent("" + username));
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        method: "DELETE",
        url: url_,
        headers: {
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processDeleteUser(_response);
    });
}

function processDeleteUser(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 400) {
        const _responseText = response.data;
        return throwException("Invalid username supplied", status, _responseText, _headers);

    } else if (status === 404) {
        const _responseText = response.data;
        return throwException("User not found", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Logs user into the system
 * @param username The user name for login
 * @param password The password for login in clear text
 * @return successful operation
 */
export function loginUser(username: string, password: string , cancelToken?: CancelToken | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/user/login?";
      if (username === undefined || username === null)
        throw new Error("The parameter 'username' must be defined and cannot be null.");
      else
        url_ += "username=" + encodeURIComponent("" + username) + "&";
      if (password === undefined || password === null)
        throw new Error("The parameter 'password' must be defined and cannot be null.");
      else
        url_ += "password=" + encodeURIComponent("" + password) + "&";
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        method: "GET",
        url: url_,
        headers: {
            "Accept": "application/json"
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processLoginUser(_response);
    });
}

function processLoginUser(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
        return Promise.resolve<string>(result200);

    } else if (status === 400) {
        const _responseText = response.data;
        return throwException("Invalid username/password supplied", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}

/**
 * Logs out current logged in user session
 * @return successful operation
 */
export function logoutUser(  cancelToken?: CancelToken | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/user/logout";
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        method: "GET",
        url: url_,
        headers: {
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processLogoutUser(_response);
    });
}

function processLogoutUser(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    {
        const _responseText = response.data;
        return Promise.resolve<void>(null as any);

    }
}

/**
 * Create user
 * @param body Created user object
 * @return successful operation
 */
export function createUser(body: Types.User , cancelToken?: CancelToken | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/user";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            "Content-Type": "application/json",
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processCreateUser(_response);
    });
}

function processCreateUser(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    {
        const _responseText = response.data;
        return Promise.resolve<void>(null as any);

    }
}