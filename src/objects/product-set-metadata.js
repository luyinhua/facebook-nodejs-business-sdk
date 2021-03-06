/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * ProductSetMetadata
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductSetMetadata extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      cover_image_url: 'cover_image_url',
      description: 'description',
      integrity_review_status: 'integrity_review_status',
    });
  }

}
