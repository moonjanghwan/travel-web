'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface BudgetData {
  category: string;
  amount: number;
  person1: number;
  person2: number;
  note?: string;
}

interface ScheduleData {
  city: string;
  arrivalDate: string;
  departureDate: string;
  nights: number;
}

export const useGoogleSheets = () => {
  const [budgetData, setBudgetData] = useState<BudgetData[]>([]);
  const [scheduleData, setScheduleData] = useState<ScheduleData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const SHEET_ID = '1zM1pruvefCx8yVDODWkVEyy3Q7zbnJcwcZb-B23Xc3M';
        const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
        
        // 예산 데이터 가져오기 (B3:G12)
        const budgetResponse = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/총비용!B3:G12?key=${API_KEY}`
        );

        // 일정 데이터 가져오기 (B21:G32)
        const scheduleResponse = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/여행 일정!B21:G32?key=${API_KEY}`
        );

        // 데이터 형식 변환
        const formattedBudgetData = budgetResponse.data.values.map((row: any[]) => ({
          category: row[0],
          amount: parseFloat(row[1]?.replace(/[^0-9.-]+/g, '')) || 0,
          person1: parseFloat(row[3]?.replace(/[^0-9.-]+/g, '')) || 0,
          person2: parseFloat(row[4]?.replace(/[^0-9.-]+/g, '')) || 0,
          note: row[5]
        }));

        const formattedScheduleData = scheduleResponse.data.values.map((row: any[]) => ({
          city: row[0],
          arrivalDate: row[1],
          departureDate: row[2],
          nights: parseInt(row[3]) || 0
        }));

        setBudgetData(formattedBudgetData);
        setScheduleData(formattedScheduleData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : '데이터를 불러오는데 실패했습니다');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { budgetData, scheduleData, loading, error };
}; 