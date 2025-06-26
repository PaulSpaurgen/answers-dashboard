export const variableCategoriesInitial = [
    {
      id: 1,
      title: "Variable category 1",
      variables: [
        { 
          name: "Carbon 1", 
          id: 1, 
          isSelected: false,
          discription: "Primary carbon emission factor used in environmental impact calculations. This variable determines the baseline carbon footprint for all fleet operations and directly affects sustainability metrics."
        },
        {
          name: "Co2 Distribution",
          id: 2,
          isSelected: false,
          discription: "Distribution pattern of CO2 emissions across different operational zones and time periods. This variable helps optimize route planning to minimize environmental impact while maintaining service efficiency.",
        },
        { 
          name: "Fleet sizing", 
          id: 3, 
          isSelected: false,
          discription: "Optimal number of vehicles required to meet demand while minimizing operational costs. This variable balances service availability with resource efficiency to ensure cost-effective fleet management."
        },
      ],
    },
    {
      id: 2,
      title: "Variable Category 2",
      variables: [
        { 
          name: "Parking Rate", 
          id: 1, 
          isSelected: false,
          discription: "Cost per hour for vehicle parking in designated zones. This variable affects operational expenses and influences vehicle deployment strategies in high-demand areas."
        },
        { 
          name: "Border Rate", 
          id: 2, 
          isSelected: false,
          discription: "Additional fees applied when vehicles cross regional or administrative boundaries. This variable impacts cross-border operations and affects pricing models for inter-regional services."
        },
        { 
          name: "Request rate", 
          id: 3, 
          isSelected: false,
          discription: "Frequency of service requests per time unit in specific geographical areas. This variable helps predict demand patterns and optimize vehicle positioning for maximum efficiency."
        },
        { 
          name: "Traffic Density", 
          id: 4, 
          isSelected: false,
          discription: "Average number of vehicles per square kilometer during peak hours. This variable influences route optimization and helps predict travel times for better service planning."
        },
        { 
          name: "Weather Impact", 
          id: 5, 
          isSelected: false,
          discription: "Weather-related factors affecting vehicle performance and user demand. This variable accounts for seasonal variations and weather-dependent service adjustments."
        },
        { 
          name: "Peak Hours", 
          id: 6, 
          isSelected: false,
          discription: "Time periods with highest service demand and usage rates. This variable helps optimize pricing strategies and resource allocation during high-demand periods."
        },
      ],
    },
    {
      id: 3,
      title: "Variable Category 3",
      variables: [
        { 
          name: "User Satisfaction", 
          id: 1, 
          isSelected: false,
          discription: "Overall user satisfaction score based on service quality, wait times, and vehicle condition. This variable measures customer experience and helps identify areas for service improvement."
        },
        { 
          name: "Maintenance Cost", 
          id: 2, 
          isSelected: false,
          discription: "Average cost of vehicle maintenance per operational hour. This variable tracks maintenance efficiency and helps optimize service schedules to minimize downtime and repair costs."
        },
        { 
          name: "Energy Efficiency", 
          id: 3, 
          isSelected: false,
          discription: "Energy consumption per kilometer traveled, measured in kWh/km for electric vehicles. This variable monitors fleet efficiency and environmental impact while optimizing charging strategies."
        },
      ],
    },
  
    {
      id: 4,
      title: "Variable Category 4",
      variables: [
        { 
          name: "Revenue Per Trip", 
          id: 1, 
          isSelected: false,
          discription: "Average revenue generated per completed trip, including base fare and additional charges. This variable tracks profitability and helps optimize pricing strategies for different service areas."
        },
        { 
          name: "Driver Utilization", 
          id: 2, 
          isSelected: false,
          discription: "Percentage of time drivers spend actively serving customers versus idle time. This variable measures operational efficiency and helps optimize driver scheduling and deployment."
        },
        { 
          name: "Service Coverage", 
          id: 3, 
          isSelected: false,
          discription: "Geographical area coverage as a percentage of total operational zone. This variable measures service accessibility and helps identify underserved areas for expansion opportunities."
        },
        { 
          name: "Response Time", 
          id: 4, 
          isSelected: false,
          discription: "Average time between service request and vehicle arrival at pickup location. This variable measures service quality and customer satisfaction, directly impacting user retention rates."
        },
        { 
          name: "Capacity Utilization", 
          id: 5, 
          isSelected: false,
          discription: "Percentage of vehicle capacity used during trips, measuring efficiency of shared mobility services. This variable helps optimize vehicle sizes and routing for maximum passenger throughput."
        },
        { 
          name: "Safety Score", 
          id: 6, 
          isSelected: false,
          discription: "Composite safety rating based on accident rates, vehicle condition, and driver performance metrics. This variable ensures service quality and regulatory compliance while minimizing liability risks."
        },
      ],
    },
  ];

  export const kpiCardsDataInitial = [
    {
      title: "Infrastructure Units",
      value: "€421.07",
      description: "This describes variable two and what the shown data means.",
    },
    {
      title: "Charging Growth",
      value: 33.07,
      description: "This describes variable two and what the shown data means.",
    },
    {
      title: "Localization change",
      value: "21.9%",
      description: "This describes variable two and what the shown data means.",
    },
    {
      title: "Fleet growth",
      value: "7.03%",
      description: "This describes variable two and what the shown data means.",
    },
  ];

    export const GrpahDataInitial = {
      data: [35000, 20000, 50000, 40000, 90000, 62000, 30000],
    };
