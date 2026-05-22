// src/Fav/Faav.js
import { useState, useEffect } from "react";

const STORAGE_KEY = "favorites_products";

export function useFavorites() {
  // دالة لتحميل المفضلة من localStorage
  const loadFavoritesFromStorage = () => {
    try {
      const savedFavorites = localStorage.getItem(STORAGE_KEY);
      if (savedFavorites) {
        return JSON.parse(savedFavorites);
      }
    } catch (error) {
      console.error("خطأ في قراءة المفضلة:", error);
    }
    return []; // القيمة الافتراضية
  };

  // تهيئة الـ state مع البيانات من localStorage
  const [favorites, setFavorites] = useState(loadFavoritesFromStorage);

  // حفظ المفضلة في localStorage عند كل تغيير
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
      console.log("تم حفظ المفضلة:", favorites); // للتأكد من العمل
    } catch (error) {
      console.error("خطأ في حفظ المفضلة:", error);
    }
  }, [favorites]);

  // التحقق إذا كان المنتج مفضلاً
  const isFavorite = (id) => {
    if (!id) return false;
    return favorites.some((item) => item.id === id);
  };

  // إضافة منتج للمفضلة
  const addFavorite = (product) => {
    if (!product || !product.id) {
      console.error("المنتج غير صالح:", product);
      return;
    }

    setFavorites((prevFavorites) => {
      // التحقق من عدم التكرار
      const exists = prevFavorites.some((item) => item.id === product.id);
      if (exists) {
        console.log("المنتج موجود بالفعل");
        return prevFavorites;
      }

      const newFavorites = [product, ...prevFavorites];
      console.log("تم إضافة المنتج:", product.id, newFavorites);
      return newFavorites;
    });
  };

  // إزالة منتج من المفضلة
  const removeFavorite = (id) => {
    if (!id) return;

    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((item) => item.id !== id);
      console.log("تم إزالة المنتج:", id, newFavorites);
      return newFavorites;
    });
  };

  // مسح كل المفضلة (اختياري)
  const clearFavorites = () => {
    setFavorites([]);
    console.log("تم مسح كل المفضلة");
  };

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    clearFavorites,
  };
}
