import React from "react";
export default function CustomizationForm({ gender, setGender, height, setHeight, weight, setWeight, build, setBuild }) {
    return (
        <div className="grid gap-4">

            <div className="flex items-center gap-2">
                <label className="font-medium">Gender:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} className="p-2 rounded border">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>


            <div className="flex items-center gap-4">
                <div>
                    <label className="font-medium">Height (cm):</label>
                    <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))}
                        className="p-2 rounded border ml-2 w-24" />
                </div>
                <div>
                    <label className="font-medium">Weight (kg):</label>
                    <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))}
                        className="p-2 rounded border ml-2 w-24" />
                </div>
            </div>


            <div className="flex items-center gap-2">
                <label className="font-medium">Build:</label>
                <select value={build} onChange={(e) => setBuild(e.target.value)} className="p-2 rounded border">
                    <option value="lean">Lean</option>
                    <option value="regular">Regular</option>
                    <option value="athletic">Athletic</option>
                    <option value="big">Big</option>
                </select>
            </div>
        </div>
    );
}
