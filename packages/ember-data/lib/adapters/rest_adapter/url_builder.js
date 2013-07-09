var get = Ember.get, set = Ember.set;

DS.URLBuilder = Ember.Object.extend({
  buildCreateURL: function(root, suffix) {
    return this.buildURL(root, suffix);
  },

  buildUpdateURL: function(root, suffix, record) {
    return this.buildURL(root, suffix, record);
  },

  buildDeleteURL: function(root, suffix, record) {
    return this.buildURL(root, suffix, record);
  },

  buildFindURL: function(root, suffix) {
    return this.buildURL(root, suffix);
  },

  buildFindAllURL: function(root, suffix) {
    return this.buildURL(root, suffix);
  },

  buildFindQueryURL: function(root, suffix) {
    return this.buildURL(root, suffix);
  },

  buildFindManyURL: function(root, suffix) {
    return this.buildURL(root, suffix);
  },

  buildFindHasManyURL: function(root, suffix, record) {
    return this.buildURL(root, suffix, record);
  },

  buildFindBelongsToURL: function(root, suffix, record) {
    return this.buildURL(root, suffix, record);
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
  buildURL: function(type, id) {
    var adapter = get(this, 'adapter'),
        url = [],
        host = get(adapter, 'host'),
        prefix = adapter.urlPrefix();

    if (type) { url.push(adapter.pathForType(type)); }
    if (id) { url.push(id); }

    if (prefix) { url.unshift(prefix); }

    url = url.join('/');
    if (!host && url) { url = '/' + url; }

    return url;
  }
});
