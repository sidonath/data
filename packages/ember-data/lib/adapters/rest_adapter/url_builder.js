var get = Ember.get, set = Ember.set;

DS.URLBuilder = Ember.Object.extend({
  buildCreateURL: function(type, id, recordOrData) {
    return this.buildURL(type, id, recordOrData);
  },

  buildUpdateURL: function(type, id, recordOrData) {
    return this.buildURL(type, id, recordOrData);
  },

  buildDeleteURL: function(type, id, recordOrData) {
    return this.buildURL(type, id, recordOrData);
  },

  buildFindURL: function(type, id, recordOrData) {
    return this.buildURL(type, id, recordOrData);
  },

  buildFindAllURL: function(type, id, recordOrData) {
    return this.buildURL(type, id, recordOrData);
  },

  buildFindQueryURL: function(type, id, recordOrData) {
    return this.buildURL(type, id, recordOrData);
  },

  buildFindManyURL: function(type, id, recordOrData) {
    return this.buildURL(type, id, recordOrData);
  },

  buildFindHasManyURL: function(root, suffix, recordOrData) {
    return this.buildURL(root, suffix, recordOrData);
  },

  buildFindBelongsToURL: function(root, suffix, recordOrData) {
    return this.buildURL(root, suffix, recordOrData);
  },

  /**
    Builds a URL for a given type and optional ID.

    By default, it pluralizes the type's name (for example,
    'post' becomes 'posts' and 'person' becomes 'people').

    If an ID is specified, it adds the ID to the path generated
    for the type, separated by a `/`.

    @method buildURL
    @param {String} type
    @param {String} id
    @returns String
  */
  buildURL: function(type, id, recordOrData) {
    var adapter = get(this, 'adapter'),
        url = [],
        host = get(adapter, 'host'),
        prefix = adapter.urlPrefix(),
        urlMap = get(adapter, 'nestedUrls');

    if (urlMap && type && urlMap[type] && recordOrData) {
      var recordUrlMap = urlMap[type],
          modelUrl;

      modelUrl = recordUrlMap.replace(/:(\w+)/g, function(match, id) {
        return get(recordOrData, id);
      });

      url.push(modelUrl);
    } else {
      if (type) { url.push(adapter.pathForType(type)); }
    }

    if (id) { url.push(id); }

    if (prefix) { url.unshift(prefix); }

    url = url.join('/');
    if (!host && url) { url = '/' + url; }

    return url;
  }
});
