<div align="center"><a href="/onestop/public-user">Public User Documentation Home</a></div>
<hr>

# Public User API Quick Start Guide

OneStop has a RESTful [Search API](/onestop/api) to query collection and granule level data that can be accessed via POST/GET. We support several community standards to make data discovery easier and index quite a few searchable fields that a user can specify when doing a query. All endpoints accept a JSON formatted request body and respond with a [JSON API Specification](http://jsonapi.org/) formatted response.

## Table of Contents

- [Community Standards](/onestop/public-user/api/community-standards) - OneStop supports searching using the Open Geospatial Consortium's (OGC), [Catalog Services for the Web](http://www.opengeospatial.org/standards/cat) (CSW) API, and the [OpenSearch](http://www.opensearch.org) specification.
- [Search Fields](/onestop/api/search-fields) - All the possible returned fields via a search.
- [Query Syntax](/onestop/api/search-query-syntax) - Commonly used search query syntax.
- [Geometries at the Antimeridian](/onestop/public-user/api/antimeridian) - There are some gotchas about the geometry searches.
- [Search API Requests](/onestop/api/search-requests) - Search API request endpoints.
- [Search API Responses](/onestop/api/search-responses) - Search responses follow a specific format.
