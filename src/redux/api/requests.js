import { formatISO } from "date-fns/fp";

import { removeNonDigit } from "../../utils/helpers";

export const getObjectSearchRequest = (data) => {
  const {
    startDate,
    endDate,
    inn,
    maxFullness,
    inBusinessNews,
    onlyMainRole,
    onlyWithRiskFactors,
    includeTechNews,
    includeAnnouncements,
    includeDigests,
    limit,
  } = data;

  const request = {
    intervalType: "month",
    histogramTypes: ["totalDocuments", "riskFactors"],
    issueDateInterval: {
      startDate: formatISO(new Date(startDate)),
      endDate: formatISO(new Date(endDate)),
    },
    searchContext: {
      targetSearchEntitiesContext: {
        targetSearchEntities: [
          {
            type: "company",
            inn: removeNonDigit(inn),
            maxFullness: maxFullness === "true",
            inBusinessNews: inBusinessNews === "true" ? true : null,
          },
        ],
        onlyMainRole: onlyMainRole === "true",
        tonality: "any",
        onlyWithRiskFactors: onlyWithRiskFactors === "true",
      },
    },
    similarMode: "duplicates",
    limit: parseInt(limit),
    sortType: "sourceInfluence",
    sortDirectionType: "desc",
    attributeFilters: {
      excludeTechNews: includeTechNews === "false",
      excludeAnnouncements: includeAnnouncements === "false",
      excludeDigests: includeDigests === "false",
    },
  };

  return request;
};

export const getDocumentsRequest = (data = []) => {
  const request = {
    ids: data.map(({ encodedId }) => encodedId),
  };

  return request;
};
